/* eslint-disable no-console */
import { isError } from "~/application/errors";
import { terminal } from "~/support";

export const error = (message: string | Error) => {
  console.error(
    terminal.applyStyles(isError(message) ? message.message : message, {
      foreground: "red",
    }),
  );
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
