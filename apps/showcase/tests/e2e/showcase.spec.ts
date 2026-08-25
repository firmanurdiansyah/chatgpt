import { expect, test } from "@playwright/test";
import { assertNoBrowserErrors, collectBrowserErrors } from "./console-helper";

const themes = ["professional", "noc", "finance"] as const;

test.describe("showcase smoke", () => {
  test("loads and exercises themes without browser errors", async ({ page }) => {
    const diagnostics = collectBrowserErrors(page);
    await page.goto("/");
    await expect(page.locator("main")).toBeVisible();
    const themeSelect = page.getByRole("combobox", { name: /tema|theme/i });
    const modeSelect = page.getByRole("combobox", { name: /mode/i });
    for (const theme of themes) {
      await themeSelect.selectOption(theme);
      await expect(page.locator("html")).toHaveAttribute("data-theme", theme);
    }
    await modeSelect.selectOption("dark");
    await expect(page.locator("html")).toHaveAttribute("data-mode", "dark");
    await modeSelect.selectOption("light");
    await expect(page.locator("html")).toHaveAttribute("data-mode", "light");
    assertNoBrowserErrors(diagnostics);
  });

  test("navigates documentation sections", async ({ page }) => {
    const diagnostics = collectBrowserErrors(page);
    await page.goto("/#components");
    await expect(page.getByRole("main")).toBeVisible();
    await expect(page.getByRole("heading", { name: "Components", exact: true })).toBeVisible();
    await page.getByRole("link", { name: "Themes", exact: true }).click();
    await expect(page.getByRole("heading", { name: "Themes", exact: true }).first()).toBeVisible();
    await page.getByRole("link", { name: "Motion", exact: true }).click();
    await expect(page.getByRole("heading", { name: "Motion", exact: true }).first()).toBeVisible();
    assertNoBrowserErrors(diagnostics);
  });

  test("renders mobile navigation without horizontal overflow", async ({ page }) => {
    const diagnostics = collectBrowserErrors(page);
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto("/#components");
    await expect(page.locator("main")).toBeVisible();
    const trigger = page.getByRole("button", { name: /buka navigasi|open navigation/i });
    await trigger.click();
    await expect(page.getByRole("navigation")).toBeVisible();
    const themesLink = page.getByRole("link", { name: "Themes", exact: true });
    await themesLink.scrollIntoViewIfNeeded();
    await themesLink.click();
    await expect(page.getByRole("heading", { name: "Themes", exact: true }).first()).toBeVisible();
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth);
    expect(overflow).toBe(false);
    assertNoBrowserErrors(diagnostics);
  });
});
