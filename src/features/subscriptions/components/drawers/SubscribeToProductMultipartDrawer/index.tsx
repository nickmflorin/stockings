import { useRouter } from "next/navigation";
import React, { useState, useCallback, useTransition } from "react";

import { toast } from "react-toastify";

import { UnreachableCaseError } from "~/application/errors";
import { NotificationType, type Product } from "~/database/model";
import { logger } from "~/internal/logger";

import { subscribeToProduct } from "~/actions/subscriptions";

import { type ExtendingDrawerProps } from "~/components/drawers";
import { Drawer } from "~/components/drawers/Drawer";
import { CircleNumber } from "~/components/icons/CircleNumber";
import { Description, Label } from "~/components/typography";
import { useChooseNotificationTypesForm } from "~/features/notifications/components/forms";

import { usePriceChangeSubscriptionForm, useStatusChangeSubscriptionForm } from "../../forms";

import { FormRenderer } from "./FormRenderer";
import {
  type StepsData,
  type StepName,
  StepNames,
  type StepsForms,
  type StepData,
  StepLabels,
  StepDescriptions,
} from "./types";

export interface SubscribeToProductMultipartDrawerProps extends ExtendingDrawerProps {
  readonly product: Product;
}

export const SubscribeToProductMultipartDrawer = ({
  product,
  onClose,
}: SubscribeToProductMultipartDrawerProps): JSX.Element => {
  const [pending, transition] = useTransition();
  const { refresh } = useRouter();

  const [activeStep, setActiveStep] = useState<StepName>(StepNames.CONFIGURE);
  const [stepData, _setStepData] = useState<StepsData>({
    configure: null,
    statusChange: null,
    priceChange: null,
  });

  /* The forms have to be managed outside the scope of the individual components to ensure that the
     data is maintained in state when transitioning from step to step. */
  const forms: StepsForms = {
    configure: useChooseNotificationTypesForm(),
    statusChange: useStatusChangeSubscriptionForm(),
    priceChange: usePriceChangeSubscriptionForm(),
  };

  const submit = useCallback(
    async (data: StepsData) => {
      if (
        (data.priceChange && data.priceChange.conditions.length !== 0) ||
        (data.statusChange && data.statusChange.conditions.length !== 0)
      ) {
        let response: Awaited<ReturnType<typeof subscribeToProduct>> | null = null;
        try {
          response = await subscribeToProduct(product.id, {
            statusChangeConditions: data.statusChange?.conditions ?? [],
            priceChangeConditions: data.priceChange?.conditions ?? [],
          });
        } catch (e) {
          logger.errorUnsafe(e, `There was an error subscribing to product '${product.id}'!`, {
            productId: product.id,
            data,
          });
          toast.error("There was an error subscribing to the product.");
        }
        if (response) {
          const { error } = response;
          if (error) {
            logger.error(`There was an error subscribing to product '${product.id}'!`, {
              productId: product.id,
              data,
              error,
            });
            toast.error("There was an error subscribing to the product.");
          } else {
            transition(() => {
              refresh();
            });
            toast.success("Successfully subscribed to the product.");
            onClose();
          }
        }
      }
    },
    [product.id, onClose, refresh],
  );

  const setStepData = useCallback(
    <N extends StepName>(step: N, data: StepData<N>) => {
      switch (step) {
        case StepNames.CONFIGURE: {
          const d = data as StepData<"configure">;
          if (d.length !== 0) {
            _setStepData({ ...stepData, [StepNames.CONFIGURE]: d });
            return setActiveStep(
              d.includes(NotificationType.PriceChangeNotification)
                ? StepNames.PRICECHANGE
                : StepNames.STATUSCHANGE,
            );
          }
          return;
        }
        case StepNames.PRICECHANGE: {
          const d = data as StepData<"priceChange">;
          if (stepData.configure) {
            _setStepData({ ...stepData, [StepNames.PRICECHANGE]: d });
            if (stepData.configure.includes(NotificationType.StatusChangeNotification)) {
              return setActiveStep(StepNames.STATUSCHANGE);
            }
            return submit({ ...stepData, [StepNames.PRICECHANGE]: d });
          }
          return;
        }
        case StepNames.STATUSCHANGE: {
          const d = data as StepData<"statusChange">;
          if (stepData.configure) {
            return submit({ ...stepData, [StepNames.STATUSCHANGE]: d });
          }
          return;
        }
        default:
          throw new UnreachableCaseError();
      }
    },
    [stepData, submit],
  );

  const onCancel = useCallback(
    (step: StepName) => {
      switch (step) {
        case StepNames.CONFIGURE:
          return onClose();
        case StepNames.PRICECHANGE:
          return setActiveStep(StepNames.CONFIGURE);
        case StepNames.STATUSCHANGE: {
          if (
            stepData.configure &&
            stepData.configure.includes(NotificationType.PriceChangeNotification)
          ) {
            return setActiveStep(StepNames.PRICECHANGE);
          }
          return setActiveStep(StepNames.CONFIGURE);
        }
      }
    },
    [stepData, onClose],
  );

  return (
    <Drawer>
      <Drawer.Header
        description={
          "Subscribe to receive notifications " + "when the inventory and/or prices change."
        }
      >
        {product.name ?? "Unnamed Product"}
      </Drawer.Header>
      <Drawer.Content className="overflow-y-hidden">
        <div className="flex flex-col gap-4 h-full">
          <div className="flex flex-col gap-3">
            <div className="flex flex-row items-center gap-2">
              <CircleNumber isActive>
                {activeStep === StepNames.CONFIGURE || !stepData.configure
                  ? 1
                  : activeStep === StepNames.PRICECHANGE
                    ? 2
                    : stepData.configure.includes(NotificationType.PriceChangeNotification)
                      ? 3
                      : 2}
              </CircleNumber>
              <Label>{StepLabels[activeStep]}</Label>
            </div>
            <Description>{StepDescriptions[activeStep]}</Description>
          </div>
          <FormRenderer
            form={forms[activeStep]}
            isPending={pending}
            step={activeStep}
            stepData={stepData}
            onCancel={() => onCancel(activeStep)}
            onFinish={data => setStepData(activeStep, data)}
          />
        </div>
      </Drawer.Content>
    </Drawer>
  );
};

export default SubscribeToProductMultipartDrawer;
