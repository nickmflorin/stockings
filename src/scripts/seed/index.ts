import { cli } from "~/scripts";

import { getScriptContext } from "../context";

import { seedProducts } from "./seed-products";

async function main() {
  if (process.env.NODE_ENV !== "development") {
    return cli.error("Can only seed database in development mode!");
  }
  const ctx = await getScriptContext({ upsertUser: true });
  await seedProducts(ctx);
}

cli.runScript(main);
