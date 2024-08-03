import { type Transaction } from "~/database";
import { fixtures } from "~/database/fixtures";

import { type SeedContext } from "../context";

export const seedProducts = async (tx: Transaction, { user }: SeedContext) =>
  await Promise.all(
    fixtures.products.map(product =>
      tx.product.create({
        data: {
          ...product,
          createdBy: { connect: { id: user.id } },
          updatedBy: { connect: { id: user.id } },
        },
      }),
    ),
  );
