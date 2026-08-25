export function collectBrowserErrors() {
  const consoleErrors: string[] = [];
  const pageErrors: string[] = [];
  return { consoleErrors, pageErrors };
}
