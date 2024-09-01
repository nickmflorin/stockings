export abstract class CommandLineArgumentError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "CommandLineArgumentError";
  }
}

export class InvalidCommandLineArgumentError extends Error {
  constructor(name: string, value: string, context?: string) {
    super(
      context
        ? `Invalid value for argument '${name}': ${value}. ${context}`
        : `Invalid value for argument '${name}': ${value}.`,
    );
    this.name = "InvalidCommandLineArgumentError";
  }
}

export class MissingCommandLineArgumentError extends Error {
  constructor(name: string) {
    super(`Missing value for argument '${name}'.`);
    this.name = "MissingCommandLineArgumentError";
  }
}

export const parseBooleanFlagCliArgument = (name: string, defaultValue = false) => {
  const value = process.argv.slice(2).find(arg => arg.startsWith(`--${name}`));
  if (!value) {
    return defaultValue;
  } else if (value.includes("=")) {
    const parsed = value.split("=")[1];
    if (!["true", "false"].includes(parsed.trim().toLowerCase())) {
      throw new InvalidCommandLineArgumentError(name, value);
    }
    return parsed.trim().toLowerCase() === "true";
  }
  return true;
};
