import dynamic from "next/dynamic";
import RouterLink from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

import { uniq } from "lodash-es";

import {
  type PriceChangeCondition,
  type StatusChangeSubscriptionCondition,
} from "~/database/model";
import { ProductSubscriptionType, ProductSubscriptionTypes } from "~/database/model";

import { addQueryParamsToUrl, parseQueryParams } from "~/integrations/http";

import type { ActionVisibility } from "~/actions";

import { Link } from "~/components/buttons";
import { ExternalProductIconLink } from "~/components/buttons/ExternalProductIconLink";
import { ProductLink } from "~/components/buttons/ProductLink";
import { EnabledIcon } from "~/components/icons/EnabledIcon";
import { type DataTableColumnProperties } from "~/components/tables";
import { HorizontallyCentered } from "~/components/util";
import {
  type SubscriptionsAdminTableColumnId,
  type SubscriptionsTableColumnId,
  type SubscriptionsTableModel,
  subscriptionsTableModelHasUser,
  subscriptionsTableModelHasProduct,
} from "~/features/subscriptions";
import { PriceChangeConditionBadge } from "~/features/subscriptions/components/badges";
import { SubscriptionTypeText } from "~/features/subscriptions/components/SubscriptionTypeText";

const StatusChangeConditionsDropdown = dynamic(() =>
  import("~/features/subscriptions/components/StatusChangeConditionsDropdown").then(
    mod => mod.StatusChangeConditionsDropdown,
  ),
);

const DateTimeText = dynamic(() =>
  import("~/components/typography/DateTimeText").then(mod => mod.DateTimeText),
);

const UserTile = dynamic(() =>
  import("~/features/users/components/UserTile").then(mod => mod.UserTile),
);

export interface UseSubscriptionsTableColumnPropertiesConfig {
  readonly visibility: ActionVisibility;
  readonly page: "subscriptions" | "product-detail";
}

export const useSubscriptionsTableColumnProperties = <M extends SubscriptionsTableModel>({
  visibility,
  page,
}: UseSubscriptionsTableColumnPropertiesConfig): DataTableColumnProperties<
  M,
  SubscriptionsTableColumnId | SubscriptionsAdminTableColumnId
> => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  return {
    conditions: {
      cellRenderer: datum =>
        datum.subscriptionType === ProductSubscriptionType.StatusChangeSubscription &&
        datum.conditions.length !== 0 ? (
          <div className="flex flex-row items-center justify-center">
            <StatusChangeConditionsDropdown
              inPortal
              conditions={datum.conditions as StatusChangeSubscriptionCondition[]}
            />
          </div>
        ) : datum.subscriptionType === ProductSubscriptionType.PriceChangeSubscription &&
          datum.conditions.length !== 0 ? (
          <div className="flex flex-col items-center gap-2">
            {uniq(datum.conditions as PriceChangeCondition[]).map((condition, index) => (
              <PriceChangeConditionBadge key={index} condition={condition} />
            ))}
          </div>
        ) : (
          <></>
        ),
    },
    notifications: {
      cellRenderer(datum) {
        if (subscriptionsTableModelHasProduct(datum)) {
          if (datum.notificationsCount === 0) {
            return "-";
          }
          let href = addQueryParamsToUrl("/notifications", {
            products: [datum.product.id],
            types: [ProductSubscriptionTypes.getModel(datum.subscriptionType).notificationType],
          });
          if (page === "product-detail") {
            href = addQueryParamsToUrl(pathname, {
              ...parseQueryParams(searchParams.toString()),
              types: [ProductSubscriptionTypes.getModel(datum.subscriptionType).notificationType],
            });
          }
          return (
            <HorizontallyCentered>
              <Link component={RouterLink} element="a" href={href}>
                {datum.notificationsCount}
              </Link>
            </HorizontallyCentered>
          );
        }
        return <></>;
      },
    },
    user: {
      cellRenderer(datum) {
        if (subscriptionsTableModelHasUser(datum)) {
          return <UserTile user={datum.user} />;
        }
        return <></>;
      },
    },
    product: {
      cellRenderer(datum) {
        if (subscriptionsTableModelHasProduct(datum)) {
          return (
            <div className="flex flex-row items-center gap-2">
              <ProductLink product={datum.product} location={visibility} />
              <ExternalProductIconLink product={datum.product} />
            </div>
          );
        }
        return <></>;
      },
    },
    enabled: {
      cellRenderer(datum) {
        return (
          <div className="flex flex-row items-center justify-center">
            <EnabledIcon isEnabled={datum.enabled} size="20px" />
          </div>
        );
      },
    },
    type: {
      cellRenderer(datum) {
        return (
          <SubscriptionTypeText
            fontWeight="medium"
            fontSize="sm"
            subscriptionType={datum.subscriptionType}
          />
        );
      },
    },
    createdAt: {
      cellRenderer(datum) {
        return <DateTimeText formatSeparately value={datum.createdAt} />;
      },
    },
    updatedAt: {
      cellRenderer(datum) {
        return <DateTimeText formatSeparately value={datum.updatedAt} />;
      },
    },
  };
};
