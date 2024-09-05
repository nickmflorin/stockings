"use client";
import { Badge } from "~/components/badges/Badge";
import { Title } from "~/components/typography";

export default function Error() {
  return (
    <div className="flex flex-row items-center gap-4">
      <Title component="h3">Users</Title>
      <Badge>0</Badge>
    </div>
  );
}
