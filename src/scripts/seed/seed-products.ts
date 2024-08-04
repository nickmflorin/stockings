import { type Transaction } from "~/database";
import { fixtures } from "~/database/fixtures";

import { type SeedContext } from "../context";

import { seedRecords } from "./seed-records";

export const seedProducts = async (tx: Transaction, ctx: SeedContext) => {
  const products = await Promise.all(
    fixtures.products.map(product =>
      tx.product.create({
        data: {
          ...product,
          createdBy: { connect: { id: ctx.user.id } },
          updatedBy: { connect: { id: ctx.user.id } },
        },
      }),
    ),
  );
  await Promise.all(products.map(product => seedRecords(tx, product, ctx)));
};
