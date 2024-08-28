export class CommandLineArgumentError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "CommandLineArgumentError";
  }
}

export const parseBooleanFlagCliArgument = (name: string, defaultValue = false) => {
  const value = process.argv.slice(2).find(arg => arg.startsWith(`--${name}`));
  if (!value) {
    return defaultValue;
  } else if (value.includes("=")) {
    const parsed = value.split("=")[1];
    if (!["true", "false"].includes(parsed.trim().toLowerCase())) {
      throw new CommandLineArgumentError(`Invalid value for argument '${name}': ${value}`);
    }
    return parsed.trim().toLowerCase() === "true";
  }
  return true;
};
