import { type ReactNode } from "react";

interface ProductsLayoutProps {
  readonly table: ReactNode;
}

export default function ProductsLayout({ table }: ProductsLayoutProps) {
  return <>{table}</>;
}
