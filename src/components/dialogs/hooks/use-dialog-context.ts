import { useContext } from "react";

import { DialogContextObj } from "../context";

export const useDialogContext = () => {
  const context = useContext(DialogContextObj);

  if (context == null) {
    throw new Error("Dialog components must be wrapped in <Dialog />");
  }

  return context;
};
