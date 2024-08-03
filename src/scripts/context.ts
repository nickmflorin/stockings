import { type User as ClerkUser } from "@clerk/clerk-sdk-node";
import clerk from "@clerk/clerk-sdk-node";

import { db, type PrismaClient, type Transaction } from "~/database";
import { type User } from "~/database/model";
import { upsertUserFromClerk } from "~/database/model/user";
import { environment } from "~/environment";

export type SeedContext = {
  readonly clerkUser: ClerkUser;
  readonly user: User;
};

type ScriptContextOptions = {
  readonly upsertUser?: boolean;
};

export async function getScriptContext(
  tx: Transaction,
  opts: ScriptContextOptions,
): Promise<SeedContext>;

export async function getScriptContext(opts: ScriptContextOptions): Promise<SeedContext>;

export async function getScriptContext(
  arg0: Transaction | ScriptContextOptions,
  arg1?: ScriptContextOptions,
): Promise<SeedContext> {
  let tx: Transaction | PrismaClient;
  let upsertUser: boolean;
  if (arg1) {
    tx = arg0 as Transaction;
    upsertUser = arg1.upsertUser ?? true;
  } else {
    tx = db;
    upsertUser = (arg0 as ScriptContextOptions).upsertUser ?? true;
  }
  const { NODE_ENV, VERCEL_ENV, CLERK_SECRET_KEY } = environment.pick([
    "NODE_ENV",
    "VERCEL_ENV",
    "CLERK_SECRET_KEY",
  ]);
  /* This will only ever be undefined in a test environment, but we must safely perform the check
     here regardless. */
  if (CLERK_SECRET_KEY === undefined) {
    return environment.throwConfigurationError(
      "CLERK_SECRET_KEY",
      "The Clerk secret key is required to seed the database.",
    );
  } else if (
    NODE_ENV === "production" &&
    (VERCEL_ENV === "development" || CLERK_SECRET_KEY.startsWith("sk_test_"))
  ) {
    /* When execuding the seed command locally, against the production database, it is important
       that the environment values pulled from Vercel are in fact for the production environment,
       not the default development environment.  Otherwise, we can accidentally store the personal
       Clerk user as the development Clerk user, not the production one.

       When the script(s) 'seeddb-prod' or 'migrate-reset-prod' are run, this script will get
       executed using production environment variables that are found locally in the repository,
       in the '.env' file.

       In this case, the database connection parameters are pulled from '.env', which contains the
       environment variables pulled via Vercel's CLI, via either the 'pullenv' script (for
       the development environment variables) or 'pullenv-prod' (for the production environment
       variables).  In both cases, however, the '.env' file contains connection parameters for the
       production database, NOT the development database...

       If in development mode, the development database connection parameters are overridden in
       '.env.development', to avoid connecting to the production database locally.  But when this
       script is run in a production context, that does not apply.

       However, the '.env' file may contain development values for the Clerk tokens, if the
       '.env' file wasn't populated via Vercel's CLI with the production flag (e.g. the last time
        the environment was pulled it was done with 'pullenv' instead of 'pullenv-prod').

       This means that the Clerk tokens in the '.env' file may be development tokens, while the
       database parameters are for the production database.  This means that we could incidentally
       wind up connecting to the production database, while at the same time using development Clerk
       tokens (which affect the 'clerkId' stored on the 'User' model).

       If seeding the production database, it is important that the command

       $ pnpm pullenv-prod

       be run, not the 'pnpm pullenv' command.

       To prevent errors from happening due to this mismatch, we have to perform this check. */
    throw new Error(
      "There seems to be a configuration mismatch that may incidentally cause development " +
        "Clerk data to be used to run this script.",
    );
  }
  const personalClerkId = process.env.PERSONAL_CLERK_USER_ID;
  if (personalClerkId === undefined) {
    /* The only reason this value can be undefined is because is for the test environment - so as
       long as we are not running the seed process in a test environment, this check is just to
       satisfy TS. */
    throw new Error(
      "Cannot seed database without the 'PERSONAL_CLERK_USER_ID' as an environment variable.",
    );
  }
  /* TODO: We have to validate that the clerk user is in fact an admin that is allowed to make these
     changes once we establish the notion of an admin. */
  const clerkUser = await clerk.users.getUser(personalClerkId);

  if (upsertUser) {
    return {
      clerkUser,
      user: await upsertUserFromClerk(tx, clerkUser),
    };
  }
  return {
    clerkUser,
    user: await tx.user.findUniqueOrThrow({ where: { clerkId: clerkUser.id } }),
  };
}
