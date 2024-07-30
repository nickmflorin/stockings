import { environment } from "~/environment";

import { NextLogger } from "./loggers/next-logger";

const initializeLogger = () => {
  if (!environment.isTest) {
    /* eslint-disable-next-line no-console -- The logger is not yet configured here. */
    console.info("Configuring logger...");
  }
  return NextLogger.create("main");
};

let _logger: NextLogger;
if (process.env.NODE_ENV === "production") {
  _logger = initializeLogger();
} else {
  if (!(globalThis as unknown as { logger?: NextLogger }).logger) {
    (globalThis as unknown as { logger?: NextLogger }).logger = initializeLogger();
  }
  _logger = (globalThis as unknown as { logger: NextLogger }).logger;
}

export const logger = _logger;
