import { HttpClientError, type HttpClientErrorConfig } from "~/integrations/http";

export class ApiServerError extends HttpClientError {
  constructor(config: Omit<HttpClientErrorConfig, "status">) {
    super({
      ...config,
      message: config.message ?? `There was a server error making a request to ${config.url}.`,
      status: 500,
    });
  }
}
