import type { Page } from "@playwright/test";

export type BrowserDiagnostics = {
  consoleErrors: string[];
  pageErrors: string[];
  requestFailures: string[];
  failedResponses: string[];
};

export function collectBrowserErrors(page: Page): BrowserDiagnostics {
  const diagnostics: BrowserDiagnostics = {
    consoleErrors: [],
    pageErrors: [],
    requestFailures: [],
    failedResponses: [],
  };

  page.on("console", (message) => {
    if (message.type() === "error") diagnostics.consoleErrors.push(message.text());
  });

  page.on("pageerror", (error) => {
    diagnostics.pageErrors.push(error.message);
  });

  page.on("requestfailed", (request) => {
    diagnostics.requestFailures.push(
      `${request.method()} ${request.url()}: ${request.failure()?.errorText ?? "unknown"}`,
    );
  });

  page.on("response", (response) => {
    if (response.status() >= 400) {
      diagnostics.failedResponses.push(
        `${response.status()} ${response.request().method()} ${response.url()}`,
      );
    }
  });

  return diagnostics;
}

export function assertNoBrowserErrors(diagnostics: BrowserDiagnostics): void {
  const failures = [
    ...diagnostics.consoleErrors.map((error) => `console.error: ${error}`),
    ...diagnostics.pageErrors.map((error) => `pageerror: ${error}`),
    ...diagnostics.requestFailures.map((error) => `requestfailed: ${error}`),
    ...diagnostics.failedResponses.map((error) => `http-error: ${error}`),
  ];

  if (failures.length > 0) {
    throw new Error(`Browser diagnostics detected ${failures.length} failure(s):\n${failures.join("\n")}`);
  }
}
