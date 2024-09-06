import { useRouter } from "next/navigation";
import { useCallback, useTransition } from "react";

import { toast } from "react-toastify";

import { ProductSubscriptionType } from "~/database/model";
import { logger } from "~/internal/logger";

import { updateProductSubscription, deleteProductSubscription } from "~/actions/subscriptions";

import { DrawerIds } from "~/components/drawers";
import { useDrawers } from "~/components/drawers/hooks";
import Icon from "~/components/icons/Icon";
import { type DataTableRowAction } from "~/components/tables";
import {
  subscriptionsTableModelHasProduct,
  type SubscriptionsTableModel,
} from "~/features/subscriptions";

interface CallbackParams {
  close: (
    evt: Event | React.MouseEvent<HTMLButtonElement> | React.MouseEvent<HTMLDivElement>,
  ) => void;
}

export const useSubscriptionsTableRowActions = <M extends SubscriptionsTableModel>() => {
  const { open } = useDrawers();

  const { refresh } = useRouter();

  const [enablePending, enableTransition] = useTransition();
  const [disablePending, disableTransition] = useTransition();
  const [deletePending, deleteTransition] = useTransition();
  const [editPending, editTransition] = useTransition();

  return useCallback(
    (subscription: M, { close }: CallbackParams): DataTableRowAction[] => [
      {
        content: "Edit",
        isLoading: editPending,
        isVisible:
          [
            ProductSubscriptionType.StatusChangeSubscription,
            ProductSubscriptionType.PriceChangeSubscription,
          ].includes(
            subscription.subscriptionType as
              | typeof ProductSubscriptionType.StatusChangeSubscription
              | typeof ProductSubscriptionType.PriceChangeSubscription,
          ) && subscriptionsTableModelHasProduct(subscription),
        icon: <Icon icon="pen-to-square" size="16px" className="text-blue-600" />,
        onClick: async e => {
          /* TODO: We are going to have to figure out how to perform modifications to subscriptions
             from the admin when the subscription is not including the product (which it will not
             for the admin's product subscriptions table). */
          if (subscriptionsTableModelHasProduct(subscription)) {
            editTransition(() => {
              if (
                subscription.subscriptionType === ProductSubscriptionType.StatusChangeSubscription
              ) {
                open(DrawerIds.UPDATE_STATUS_CHANGE_SUBSCRIPTION, {
                  subscriptionId: subscription.id,
                  product: subscription.product,
                });
                close(e);
              } else if (
                subscription.subscriptionType === ProductSubscriptionType.PriceChangeSubscription
              ) {
                open(DrawerIds.UPDATE_PRICE_CHANGE_SUBSCRIPTION, {
                  subscriptionId: subscription.id,
                  product: subscription.product,
                });
                close(e);
              }
            });
          }
        },
      },
      {
        isVisible: !subscription.enabled,
        content: "Enable",
        loadingText: "Enabling",
        icon: <Icon icon="volume-high" size="16px" className="text-gray-600" />,
        isLoading: enablePending,
        onClick: async (e, instance) => {
          instance.setLoading(true);
          let response: Awaited<ReturnType<typeof updateProductSubscription>> | null = null;
          try {
            response = await updateProductSubscription(subscription.id, { enabled: true });
          } catch (e) {
            logger.errorUnsafe(
              e,
              `There was an error enabling subscription with ID '${subscription.id}'!`,
            );
            toast.error("There was an error enabling the subscription. Please try again later.");
            return instance.setLoading(false);
          }
          const { error } = response;
          if (error) {
            logger.errorUnsafe(
              e,
              `There was an error enabling subscription with ID '${subscription.id}'!`,
            );
            toast.error("There was an error enabling the subscription. Please try again later.");
            return;
          }
          return enableTransition(() => {
            refresh();
            instance.setLoading(false);
            close(e);
          });
        },
      },
      {
        isVisible: subscription.enabled,
        content: "Disable",
        loadingText: "Disabling",
        icon: <Icon icon="volume-xmark" size="16px" className="text-gray-600" />,
        isLoading: disablePending,
        onClick: async (e, instance) => {
          instance.setLoading(true);
          let response: Awaited<ReturnType<typeof updateProductSubscription>> | null = null;
          try {
            response = await updateProductSubscription(subscription.id, { enabled: false });
          } catch (e) {
            logger.errorUnsafe(
              e,
              `There was an error disabling subscription with ID '${subscription.id}'!`,
            );
            toast.error("There was an error disabling the subscription. Please try again later.");
            return instance.setLoading(false);
          }
          const { error } = response;
          if (error) {
            logger.errorUnsafe(
              e,
              `There was an error disabling subscription with ID '${subscription.id}'!`,
            );
            toast.error("There was an error disabling the subscription. Please try again later.");
            return;
          }
          return disableTransition(() => {
            refresh();
            instance.setLoading(false);
            close(e);
          });
        },
      },
      {
        content: "Delete",
        isLoading: deletePending,
        loadingText: "Deleting",
        icon: <Icon icon="trash-alt" size="16px" className="text-red-600" />,
        onClick: async (e, instance) => {
          instance.setLoading(true);
          let response: Awaited<ReturnType<typeof deleteProductSubscription>> | null = null;
          try {
            response = await deleteProductSubscription(subscription.id);
          } catch (e) {
            logger.errorUnsafe(
              e,
              `There was an error deleting the subscription with ID '${subscription.id}'!`,
            );
            toast.error("There was an error deleting the subscription. Please try again later.");
            return instance.setLoading(false);
          }
          const { error } = response;
          if (error) {
            logger.errorUnsafe(
              e,
              `There was an error deleting the subscription with ID '${subscription.id}'!`,
            );
            toast.error("There was an error deleting the subscription. Please try again later.");
            return;
          }
          return deleteTransition(() => {
            refresh();
            instance.setLoading(false);
            close(e);
          });
        },
      },
    ],
    [deletePending, disablePending, enablePending, editPending, open, refresh],
  );
};
