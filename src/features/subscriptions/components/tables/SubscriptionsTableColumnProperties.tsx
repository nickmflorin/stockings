import { uniq } from "lodash-es";

import {
  type ApiProductSubscription,
  type PriceChangeCondition,
  type StatusChangeSubscriptionCondition,
} from "~/database/model";
import { ProductSubscriptionType } from "~/database/model";

import { EnabledIcon } from "~/components/icons/EnabledIcon";
import { type DataTableColumnProperties } from "~/components/tables";
import { Text } from "~/components/typography";
import { DateTimeText } from "~/components/typography/DateTimeText";
import { type SubscriptionsTableColumnId } from "~/features/subscriptions";
import { PriceChangeConditionBadge } from "~/features/subscriptions/components/badges";
/* eslint-disable-next-line max-len */
import { StatusChangeConditionsDropdown } from "~/features/subscriptions/components/StatusChangeConditionsDropdown";

import { SubscriptionTypeText } from "../SubscriptionTypeText";

export const SubscriptionsTableColumnProperties: DataTableColumnProperties<
  | ApiProductSubscription<["conditions", "notificationsCount", "product"]>
  | ApiProductSubscription<["conditions"]>,
  SubscriptionsTableColumnId
> = {
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
      return (
        <Text fontWeight="regular" fontSize="sm" className="text-description">
          Created on{" "}
          <DateTimeText
            className="text-body"
            fontWeight="medium"
            component="span"
            value={datum.createdAt}
          />
        </Text>
      );
    },
  },
  updatedAt: {
    cellRenderer(datum) {
      return (
        <Text fontWeight="regular" fontSize="sm" className="text-description">
          Last updated on{" "}
          <DateTimeText
            className="text-body"
            fontWeight="medium"
            component="span"
            value={datum.updatedAt}
          />
        </Text>
      );
    },
  },
};
