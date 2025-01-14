/*
This script is intended to ensure that the node version that is running the application is correct
before allowing execution to continue.
*/
import semver from "semver";

import { engines } from "../../package.json";

import * as terminal from "./terminal";

const version = engines.node;
if (version === undefined) {
  throw new Error("Cannot detect node version from package.json");
}

if (!semver.satisfies(process.version, version)) {
  const message =
    terminal.applyStyles(
      `Your current node version, ${process.version}, does not satisfy the project's required ` +
        `version, ${version}.`,
      { foreground: "red" },
    ) +
    "\n" +
    terminal.applyStyles("Please refer to the project ReadMe.md for more information.", {
      foreground: "yellow",
    }) +
    "\n";
  /* eslint-disable-next-line no-console */
  console.log(message);
  process.exit(1);
} else {
  const message =
    terminal.applyStyles(
      `Your current node version, ${process.version}, satisfies the project's required version, ${version}.`,
      { foreground: "green" },
    ) + "\n";
  /* eslint-disable-next-line no-console */
  console.log(message);
}
