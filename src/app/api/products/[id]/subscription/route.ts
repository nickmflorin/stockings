import { type NextRequest } from "next/server";

import { db } from "~/database";

import { fetchProductSubcription } from "~/actions/fetches/products";

import { ClientResponse } from "~/api";

export async function generateStaticParams() {
  const products = await db.product.findMany();
  return products.map(c => ({
    id: c.id,
  }));
}

export const GET = async (request: NextRequest, { params }: { params: { id: string } }) => {
  const { error, data } = await fetchProductSubcription(params.id, { scope: "api" });
  if (error) {
    return error.response;
  }
  return ClientResponse.OK(data).response;
};
