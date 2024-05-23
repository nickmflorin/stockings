export abstract class LieNielsenHttpError extends Error {
  protected readonly url: string;

  constructor(url: string) {
    super();
    this.url = url;
  }

  public get message() {
    return `There was an error making a request to ${this.url}.`;
  }
}

export class LieNielsenNetworkError extends LieNielsenHttpError {
  public readonly error: Error;

  constructor(url: string, error: Error) {
    super(url);
    this.error = error;
  }
  public get message() {
    return `There was a network error making a request to ${this.url}:\n${this.error}`;
  }
}

export class LieNielsenClientError extends LieNielsenHttpError {
  public readonly status: number;

  constructor(url: string, status: number) {
    super(url);
    this.status = status;
  }

  public get message() {
    return `[${this.status}] There was a client error making a request to ${this.url}.`;
  }
}

export class LieNielsenSerializationError extends LieNielsenHttpError {
  public readonly error: Error;

  constructor(url: string, error: Error) {
    super(url);
    this.error = error;
  }
  public get message() {
    return `There was an error deserializing the response from the request to ${this.url}:\n${this.error}`;
  }
}
