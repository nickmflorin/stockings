import { type ApiProductNotification } from "~/database/model";
import { ProductNotificationType } from "~/database/model";

import { ExternalProductIconLink } from "~/components/buttons/ExternalProductIconLink";
import { ProductLink } from "~/components/buttons/ProductLink";
import { type DataTableColumnProperties } from "~/components/tables";
import { Text } from "~/components/typography";
import { DateTimeText } from "~/components/typography/DateTimeText";
import { HorizontallyCentered } from "~/components/util";
import { NotificationMediumBadge } from "~/features/notifications/components/badges";
import { NotificationStateText } from "~/features/notifications/components/NotificationStateText";
import { NotificationTypeText } from "~/features/notifications/components/NotificationTypeText";
import { type ProductNotificationsTableColumnId } from "~/features/notifications/types";
/* eslint-disable-next-line max-len */
import { PriceChangeConditionTransition } from "~/features/subscriptions/components/PriceChangeConditionTransition";
/* eslint-disable-next-line max-len */
import { StatusChangeConditionTransition } from "~/features/subscriptions/components/StatusChangeConditionTransition";

export const NotificationsTableColumnProperties = (
  location: "admin" | "public",
): DataTableColumnProperties<
  ApiProductNotification<["product"]> | ApiProductNotification<[]>,
  ProductNotificationsTableColumnId
> => ({
  product: {
    cellRenderer(datum) {
      if ((datum as ApiProductNotification<["product"]>).product !== undefined) {
        return (
          <div className="flex flex-row items-center gap-2">
            <ProductLink
              product={(datum as ApiProductNotification<["product"]>).product}
              location={location}
            />
            <ExternalProductIconLink
              product={(datum as ApiProductNotification<["product"]>).product}
            />
          </div>
        );
      }
      return <></>;
    },
  },
  event: {
    cellRenderer(datum) {
      if (datum.notificationType === ProductNotificationType.StatusChangeNotification) {
        return (
          <HorizontallyCentered>
            <StatusChangeConditionTransition
              fromStatus={datum.previousStatus}
              toStatus={datum.newStatus}
            />
          </HorizontallyCentered>
        );
      } else if (datum.notificationType === ProductNotificationType.PriceChangeNotification) {
        return (
          <HorizontallyCentered>
            <PriceChangeConditionTransition
              fromPrice={datum.previousPrice}
              toPrice={datum.newPrice}
            />
          </HorizontallyCentered>
        );
      }
    },
  },
  type: {
    cellRenderer(datum) {
      return (
        <NotificationTypeText
          fontWeight="medium"
          fontSize="sm"
          notificationType={datum.notificationType}
        />
      );
    },
  },
  state: {
    cellRenderer(datum) {
      return (
        <div className="flex flex-col">
          <NotificationStateText fontWeight="medium" fontSize="sm" state={datum.state} />
          {datum.stateAsOf && (
            <Text fontWeight="regular" fontSize="sm" className="text-gray-500">
              {" "}
              as of <DateTimeText component="span" value={datum.stateAsOf} />
            </Text>
          )}
        </div>
      );
    },
  },
  mediums: {
    cellRenderer(datum) {
      if (datum.mediums.length > 0) {
        return (
          <div className="flex flex-row gap-2">
            {datum.mediums.map(medium => (
              <NotificationMediumBadge key={medium} medium={medium} />
            ))}
          </div>
        );
      }
      return <div className="flex flex-col">Need to do</div>;
    },
  },
});
