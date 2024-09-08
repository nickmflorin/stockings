/* eslint-disable no-console */
import { isError } from "~/application/errors";
import { terminal } from "~/support";

import { CommandLineError } from "~/scripts/cli/errors";

export const error = (message: string | Error) => {
  if (message instanceof CommandLineError || typeof message === "string") {
    console.error(
      terminal.applyStyles(isError(message) ? message.message : message, {
        foreground: "red",
      }),
    );
  } else {
    console.error(message);
  }
};

export const info = (message: string) => {
  console.info(terminal.applyStyles(message, { foreground: "cyan" }));
};

export const warn = (message: string) => {
  console.warn(terminal.applyStyles(message, { foreground: "yellow" }));
};

export const success = (message: string) => {
  console.info(terminal.applyStyles(message, { foreground: "green" }));
};
