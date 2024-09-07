import { client } from "~/integrations/lie-nielsen";

import { cli } from "~/scripts";

const script: cli.Script = async context => {
  await client.updateProducts({ batchSize: 10, user: context.user });
};

cli.runScript(script, { upsertUser: true });
