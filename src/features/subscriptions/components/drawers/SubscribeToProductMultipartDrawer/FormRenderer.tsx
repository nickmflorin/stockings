import dynamic from "next/dynamic";

import { ProductNotificationType } from "~/database/model";

import { Loading } from "~/components/loading/Loading";
import { ButtonFooter } from "~/components/structural/ButtonFooter";

import { type StepsData, type StepName, StepNames, type StepData, type StepForms } from "./types";

const ChooseNotificationTypesForm = dynamic(
  () =>
    import("~/features/notifications/components/forms/ChooseNotificationTypesForm").then(
      mod => mod.ChooseNotificationTypesForm,
    ),
  { loading: () => <Loading isLoading /> },
);

const StatusChangeSubscriptionForm = dynamic(
  () =>
    import("~/features/subscriptions/components/forms/StatusChangeSubscriptionForm").then(
      mod => mod.StatusChangeSubscriptionForm,
    ),
  { loading: () => <Loading isLoading /> },
);

const PriceChangeSubscriptionForm = dynamic(() =>
  import("~/features/subscriptions/components/forms/PriceChangeSubscriptionForm").then(
    mod => mod.PriceChangeSubscriptionForm,
  ),
);

export interface FormRendererProps<N extends StepName> {
  readonly form: StepForms<N>;
  readonly step: N;
  readonly stepData: StepsData;
  readonly isPending: boolean;
  readonly onCancel: () => void;
  readonly onFinish: (data: StepData<N>) => void;
}

const Renderers: {
  [key in StepName]: (props: Omit<FormRendererProps<key>, "step">) => JSX.Element;
} = {
  [StepNames.CONFIGURE]: ({ form, onCancel, onFinish }) => (
    <ChooseNotificationTypesForm
      withContext={false}
      form={form}
      action={data => onFinish(data.notificationTypes)}
      footer={
        <ButtonFooter
          submitText="Next"
          orientation="full-width"
          cancelText="Cancel"
          onCancel={onCancel}
        />
      }
    />
  ),
  [StepNames.PRICECHANGE]: ({ form, isPending, stepData, onCancel, onFinish }) => (
    <PriceChangeSubscriptionForm
      isLoading={isPending}
      action={data => onFinish(data)}
      withContext={false}
      form={form}
      excludeEnableToggle
      footer={
        <ButtonFooter
          submitText={
            stepData.configure &&
            stepData.configure.includes(ProductNotificationType.StatusChangeNotification)
              ? "Next"
              : "Subscribe"
          }
          orientation="full-width"
          cancelText="Back"
          onCancel={onCancel}
        />
      }
    />
  ),
  [StepNames.STATUSCHANGE]: ({ form, isPending, onCancel, onFinish }) => (
    <StatusChangeSubscriptionForm
      isLoading={isPending}
      form={form}
      action={data => onFinish(data)}
      withContext={false}
      excludeEnableToggle
      footer={
        <ButtonFooter
          submitText="Subscribe"
          orientation="full-width"
          cancelText="Back"
          onCancel={onCancel}
        />
      }
    />
  ),
};

export const FormRenderer = <N extends StepName>({ step, ...props }: FormRendererProps<N>) =>
  Renderers[step](props);
