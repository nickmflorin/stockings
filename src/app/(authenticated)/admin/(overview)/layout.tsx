import { Tabs } from "~/components/layout/Tabs";

interface AdminOverviewLayoutProps {
  readonly children: React.ReactNode;
}

export default async function AdminOverviewLayout({
  children,
}: AdminOverviewLayoutProps): Promise<JSX.Element> {
  return (
    <div className="flex flex-col gap-6 w-full h-full max-h-full overflow-hidden">
      <Tabs
        items={[
          {
            label: "Products",
            path: "/admin/products",
            activePaths: { leadingPath: "/admin/products" },
            icon: { name: "toolbox" },
          },
        ]}
      />
      <div className="grow min-h-0 max-h-full h-full flex flex-col">{children}</div>
    </div>
  );
}
