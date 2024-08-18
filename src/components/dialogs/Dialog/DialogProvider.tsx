"use client";
import type { ReactNode } from "react";

import { DialogContextObj } from "~/components/dialogs/context";
import { useDialog, type DialogConfig } from "~/components/dialogs/hooks/use-dialog";

export interface DialogProviderProps extends DialogConfig {
  readonly children: ReactNode;
}

export const DialogProvider = ({ children, ...options }: DialogProviderProps) => {
  const dialog = useDialog(options);
  return <DialogContextObj.Provider value={dialog}>{children}</DialogContextObj.Provider>;
};

export default DialogProvider;
