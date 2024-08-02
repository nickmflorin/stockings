import { ProductsTableView } from "~/features/products/components/ProductsTableView";

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-[12px]">
      <ProductsTableView />
    </div>
  );
}
