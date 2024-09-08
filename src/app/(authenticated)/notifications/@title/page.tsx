import { fetchProductNotificationsCount } from "~/actions/notifications";

export default async function NotificationsTitlePage() {
  const {
    data: { count },
  } = await fetchProductNotificationsCount({ filters: {}, visibility: "public" }, { strict: true });
  return <>{count}</>;
}
