import dynamic from "next/dynamic";
import { redirect } from "next/navigation";

import { getAuthedUser } from "~/application/auth/server";
import { db } from "~/database";

import { fetchProducts } from "~/actions/fetches/products";

import { Loading } from "~/components/loading/Loading";

const ClientProductsTableBody = dynamic(
  () => import("~/features/products/components/tables/ProductsTableBody"),
  { loading: () => <Loading isLoading component="tbody" /> },
);

export const ProductsTableBody = async (): Promise<JSX.Element> => {
  const { user } = await getAuthedUser();

  if (!user) {
    // TODO: Revisit this redirect
    return redirect("/sign-in");
  }

  const products = await fetchProducts({
    filters: { categories: [], subCategories: [], search: "", statuses: [] },
    ordering: { field: "name", order: "asc" },
    page: 1,
  });
  const subscriptions = await db.productSubscription.findMany({
    where: { userId: user.id, productId: { in: products.map(p => p.id) } },
    include: { statusChange: { include: { conditions: true } }, priceChange: true },
  });
  return (
    <ClientProductsTableBody
      data={products.map(product => ({
        ...product,
        subscription: subscriptions.find(subscription => subscription.productId) ?? null,
      }))}
    />
  );
};
