import { Badge } from "~/components/badges/Badge";
import { LoadingText } from "~/components/loading/LoadingText";
import { Title } from "~/components/typography";

export default function Loading() {
  return (
    <div className="flex flex-row items-center gap-2">
      <Title component="h5">Notifications</Title>
      <Badge>
        <LoadingText />
      </Badge>
    </div>
  );
}
