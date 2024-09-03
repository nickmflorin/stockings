/* eslint-disable no-console */
import { db } from "~/database/prisma";
import { terminal } from "~/support";

export abstract class CommandLineError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "CommandLineError";
  }
}

export abstract class CommandLineArgumentError extends CommandLineError {
  constructor(message: string) {
    super(message);
    this.name = "CommandLineArgumentError";
  }
}

export class InvalidCommandLineArgumentError extends CommandLineError {
  constructor(name: string, value: string, context?: string) {
    super(
      context
        ? `Invalid value for argument '${name}': ${value}. ${context}`
        : `Invalid value for argument '${name}': ${value}.`,
    );
    this.name = "InvalidCommandLineArgumentError";
  }
}

export class MissingCommandLineArgumentError extends CommandLineError {
  constructor(name: string) {
    super(`Missing value for argument '${name}'.`);
    this.name = "MissingCommandLineArgumentError";
  }
}

const splitCliNamedArgument = (value: string) => {
  if (!value.includes("=")) {
    return undefined;
  }
  const parsed = value.split("=")[1];
  if (parsed === undefined) {
    return undefined;
  }
  return parsed.trim();
};

export const parseBooleanFlagCliArgument = (name: string, defaultValue = false) => {
  const value = process.argv.slice(2).find(arg => arg.startsWith(`--${name}`));
  if (!value) {
    return defaultValue;
  } else if (value.includes("=")) {
    const parsed = splitCliNamedArgument(value);
    if (parsed !== undefined) {
      if (!["true", "false"].includes(parsed.trim().toLowerCase())) {
        throw new InvalidCommandLineArgumentError(name, value);
      }
      return parsed.trim().toLowerCase() === "true";
    }
    return defaultValue;
  }
  return true;
};

export const parseIntegerCliArgument = (name: string): number | null => {
  const value = process.argv.slice(2).find(arg => arg.startsWith(`--${name}`));
  if (value === undefined) {
    return null;
  }
  const split = splitCliNamedArgument(value);
  if (split !== undefined) {
    const parsed = parseInt(split);
    if (isNaN(parsed) || !isFinite(parsed)) {
      throw new InvalidCommandLineArgumentError(name, value);
    }
    return parsed;
  }
  return null;
};

export const error = (message: string) => {
  console.error(terminal.applyStyles(message, { foreground: "red" }));
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

export const runScript = (fn: () => Promise<void>) => {
  fn()
    .then(async () => {
      await db.$disconnect();
    })
    .catch(async e => {
      if (e instanceof CommandLineError) {
        error(e.message);
      } else {
        console.error(e);
      }
      await db.$disconnect();
      process.exit(1);
    });
};
