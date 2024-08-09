/*
This file should *only* be used for instantiating the PrismaClient.

Each instance of PrismaClient manages a connection pool, which means that a large number of clients
can exhaust the database connection limit. This applies to all database connectors.  As such, each
application should generally only need one instance of the PrismaClient.

See: https://www.prisma.io/docs/concepts/components/prisma-client/working-with-prismaclient
     /instantiate-prisma-client#the-number-of-prismaclient-instances-matters

NextJS supports hot reloading of changed files, which means that the module responsible for
exporting the PrismaClient will be refreshed constantly.  This can result in additional, unwanted
instances of PrismaClient in a development environment.

As a workaround, you can store PrismaClient as a global variable in development environments only,\
as global variables are not reloaded:

See: https://www.prisma.io/docs/guides/performance-and-optimization/connection-management
     #prevent-hot-reloading-from-creating-new-instances-of-prismaclient
*/
import { environment } from "~/environment";

import { PrismaClient } from "../../model/generated";

import { brandExtension } from "./brand-extension";
import { ModelMetaDataMiddleware } from "./middleware";

export * from "./errors";

export const initializePrismaClient = () => {
  /* eslint-disable-next-line no-console -- The logger is not in context for seeding. */
  console.info("Initializing Prisma Client");
  const prisma = new PrismaClient({
    log: environment.get("DATABASE_LOG_LEVEL"),
  });
  prisma.$use(ModelMetaDataMiddleware);
  return prisma.$extends(brandExtension);
};

export let db: ReturnType<typeof initializePrismaClient>;

const globalDb = globalThis as unknown as { db: ReturnType<typeof initializePrismaClient> };

if (typeof window === "undefined") {
  if (process.env.NODE_ENV === "production") {
    db = initializePrismaClient();
  } else {
    if (!globalDb.db) {
      db = initializePrismaClient();
      /* eslint-disable-next-line no-console -- The logger is not in context for seeding. */
      console.info("Storing Globally Instantiated Prisma Client");
      globalDb.db = db;
    } else {
      db = globalDb.db;
    }
  }
}

export type Transaction = Omit<
  ReturnType<typeof initializePrismaClient>,
  "$connect" | "$disconnect" | "$on" | "$transaction" | "$use" | "$extends"
>;
