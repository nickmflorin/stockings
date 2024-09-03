import { cli } from "~/scripts";

import { getScriptContext } from "../context";

import { seedProducts } from "./seed-products";

async function main() {
  const ctx = await getScriptContext({ upsertUser: true });
  await seedProducts(ctx);
}

cli.runScript(main);
