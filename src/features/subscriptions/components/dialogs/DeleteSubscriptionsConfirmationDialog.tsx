import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";

import { toast } from "react-toastify";

import type { FullProductSubscription } from "~/database/model";
import { logger } from "~/internal/logger";

import { deleteSubscriptions } from "~/actions/mutations/subscriptions";

import { Dialog } from "~/components/dialogs/Dialog";
import { ButtonFooter } from "~/components/structural/ButtonFooter";

export interface DeleteSubscriptionsConfirmationDialogProps {
  readonly isOpen: boolean;
  readonly rows: FullProductSubscription[];
  readonly onClose: () => void;
  readonly onSuccess: () => void;
  readonly onCancel: () => void;
}

export const DeleteSubscriptionsConfirmationDialog = ({
  isOpen,
  rows,
  onSuccess,
  onCancel,
  onClose,
}: DeleteSubscriptionsConfirmationDialogProps) => {
  const [isDeleting, setIsDeleting] = useState(false);
  const [pending, transition] = useTransition();
  const { refresh } = useRouter();

  return (
    <Dialog.Provider isOpen={isOpen} onClose={onClose}>
      <Dialog className="w-[500px]">
        <Dialog.Close />
        <Dialog.Title>Confirm</Dialog.Title>
        <Dialog.Content>
          <Dialog.Description>
            {`You are about to delete ${rows.length} subscriptions. Would you like to continue?`}
          </Dialog.Description>
        </Dialog.Content>
        <Dialog.Footer>
          <ButtonFooter
            submitText="Delete"
            submitButtonType="button"
            orientation="full-width"
            isSubmitting={isDeleting || pending}
            onCancel={onCancel}
            onSubmit={async () => {
              setIsDeleting(true);
              let response: Awaited<ReturnType<typeof deleteSubscriptions>> | null = null;
              try {
                response = await deleteSubscriptions(rows.map(sub => sub.id));
              } catch (e) {
                logger.errorUnsafe(e, "There was an error deleting the subscription(s)!", {
                  subscriptions: rows.map(sub => sub.id),
                });
                toast.error(
                  `There was an error deleting the subscription${rows.length === 1 ? "" : "s"}.`,
                );
              }
              if (response) {
                const { error } = response;
                if (error) {
                  logger.error("There was an error deleting the subscription(s)!", {
                    subscriptions: rows.map(sub => sub.id),
                    error,
                  });
                  toast.error(
                    `There was an error deleting the subscription${rows.length === 1 ? "" : "s"}.`,
                  );
                } else {
                  toast.success(
                    rows.length === 1
                      ? "Successfully deleted the subscription."
                      : "Successfully deleted the subscriptions.",
                  );
                  transition(() => {
                    refresh();
                    onSuccess?.();
                  });
                }
              }
            }}
          />
        </Dialog.Footer>
      </Dialog>
    </Dialog.Provider>
  );
};

export default DeleteSubscriptionsConfirmationDialog;
