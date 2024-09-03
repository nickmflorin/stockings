"use client";
import { Badge } from "~/components/badges/Badge";
import { Title } from "~/components/typography";

export default function Error() {
  return (
    <div className="flex flex-row items-center gap-2">
      <Title component="h5">Notifications</Title>
      <Badge>0</Badge>
    </div>
  );
}
