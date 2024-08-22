import dynamic from "next/dynamic";
import { useState, useMemo, useCallback } from "react";

import { NotificationType, type Product } from "~/database/model";
import { logger } from "~/internal/logger";

import { type ExtendingDrawerProps } from "~/components/drawers";
import { Drawer } from "~/components/drawers/Drawer";
import { Loading } from "~/components/loading/Loading";
import { ButtonFooter } from "~/components/structural/ButtonFooter";
/* eslint-disable-next-line max-len */
import { ChooseNotificationTypesForm } from "~/features/subscriptions/components/forms/ChooseNotificationTypesForm";

const SubscribeToStatusChangesForm = dynamic(
  () =>
    import("../../forms/SubscribeToStatusChangesForm").then(
      mod => mod.SubscribeToStatusChangesForm,
    ),
  { loading: () => <Loading isLoading /> },
);

const StepNames = ["configure", "statusChange", "priceChange"] as const;
type StepName = (typeof StepNames)[number];

const StepDescriptions: { [key in StepName]: string } = {
  configure: "Subscribe to receive notifications for the product.",
  statusChange: "Configure your status change notifications.",
  priceChange: "Configure your price change notifications.",
};

type StepData = {
  configure: Exclude<NotificationType, "NewProductNotification">[];
  statusChange: any;
  priceChange: any;
};

type StepProps<N extends StepName> = {
  readonly onCancel: () => void;
  readonly onFinish: (data: StepData[N]) => void;
};

const Steps: { [key in StepName]: (props: StepProps<key>) => JSX.Element } = {
  configure: ({ onCancel, onFinish }) => (
    <ChooseNotificationTypesForm
      action={data => onFinish(data.notificationTypes)}
      footer={<ButtonFooter submitText="Next" orientation="full-width" onCancel={onCancel} />}
    />
  ),
  statusChange: () => <></>,
  priceChange: () => <></>,
};

interface SubscribeToProductMultipartDrawerProps extends ExtendingDrawerProps {
  readonly product: Product;
}

export const SubscribeToProductMultipartDrawer = ({
  product,
  onClose,
}: SubscribeToProductMultipartDrawerProps): JSX.Element => {
  const [step, setStep] = useState<StepName>("configure");
  const [notificationTypes, setNotificationTypes] = useState<
    Exclude<NotificationType, "NewProductNotification">[] | null
  >(null);

  const incrementStep = useCallback(() => {
    setStep(prevStep => {
      if (prevStep === "configure") {
        if (notificationTypes !== null && notificationTypes.length !== 0) {
          return notificationTypes.includes(NotificationType.StatusChangeNotification)
            ? "statusChange"
            : "priceChange";
        }
        logger.warn("");
      }
    });
  }, []);

  const stepContent = useMemo(() => {
    switch (step) {
      case "configure":
        return Steps.configure({ onCancel: onClose, onFinish: data => setNotificationTypes(data) });
      case "priceChange":
        return Steps.priceChange({ onCancel: onClose, onFinish: data => console.log(data) });
      case "statusChange":
        return Steps.statusChange({ onCancel: onClose, onFinish: data => console.log(data) });
    }
  }, [step, onClose]);

  return (
    <Drawer>
      <Drawer.Header description={StepDescriptions[step]}>
        {product.name ?? "Unnamed Product"}
      </Drawer.Header>
      <Drawer.Content className="overflow-y-hidden">{stepContent}</Drawer.Content>
    </Drawer>
  );
};

export default SubscribeToProductMultipartDrawer;
