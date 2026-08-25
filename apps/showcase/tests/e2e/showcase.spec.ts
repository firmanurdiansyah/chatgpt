import { expect, test } from "@playwright/test";
import { assertNoBrowserErrors, collectBrowserErrors } from "./console-helper";

const themes = ["professional", "noc", "finance"] as const;

test.describe("showcase smoke", () => {
  test("loads and exercises themes without browser errors", async ({ page }) => {
    const diagnostics = collectBrowserErrors(page);

    await page.goto("/");
    await expect(page.locator("main")).toBeVisible();

    for (const theme of themes) {
      await page.getByRole("button", { name: new RegExp(theme, "i") }).click();
      await expect(page.locator("body")).toHaveAttribute("data-theme", theme);
    }

    await page.getByRole("button", { name: /dark/i }).click();
    await expect(page.locator("body")).toHaveAttribute("data-mode", "dark");

    await page.getByRole("button", { name: /light/i }).click();
    await expect(page.locator("body")).toHaveAttribute("data-mode", "light");

    assertNoBrowserErrors(diagnostics);
  });

  test("renders on mobile without horizontal overflow", async ({ page }) => {
    const diagnostics = collectBrowserErrors(page);
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto("/");
    await expect(page.locator("main")).toBeVisible();

    const overflow = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth);
    expect(overflow).toBe(false);
    assertNoBrowserErrors(diagnostics);
  });
});
