import { type NextRequest } from "next/server";

import { db } from "~/database/prisma";

/* eslint-disable-next-line max-len */
import { fetchStatusChangeSubcription } from "~/actions/subscriptions/fetch-status-change-subscription";

import { ClientResponse } from "~/api";

export async function generateStaticParams() {
  const subscriptions = await db.statusChangeSubscription.findMany();
  return subscriptions.map(s => ({
    id: s.id,
  }));
}

export const GET = async (request: NextRequest, { params }: { params: { id: string } }) => {
  const { error, data } = await fetchStatusChangeSubcription(params.id, { scope: "api" });
  if (error) {
    return error.response;
  }
  return ClientResponse.OK(data).response;
};
