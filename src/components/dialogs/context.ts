import { createContext } from "react";

import { type DialogContext } from "./types";

export const DialogContextObj = createContext<DialogContext | null>(null);
