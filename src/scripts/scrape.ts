import { client } from "~/integrations/lie-nielsen";

import { cli } from "~/scripts";
import { getScriptContext } from "~/scripts/context";

async function main() {
  const { user } = await getScriptContext({ upsertUser: true });
  await client.updateProducts({ batchSize: 10, user });
}

cli.runScript(main);
