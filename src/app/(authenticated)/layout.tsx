import { type ReactNode } from "react";

interface AuthenticatedLayoutProps {
  readonly children: ReactNode;
}

export default function AuthenticatedLayout({ children }: AuthenticatedLayoutProps) {
  return <div>{children}</div>;
}
