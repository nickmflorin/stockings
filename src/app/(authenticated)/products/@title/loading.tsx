import { Badge } from "~/components/badges/Badge";
import { LoadingText } from "~/components/loading/LoadingText";
import { Title } from "~/components/typography";

const Loading = () => (
  <div className="flex flex-row items-center gap-4">
    <Title component="h3">Products</Title>
    <Badge>
      <LoadingText />
    </Badge>
  </div>
);

export default Loading;
