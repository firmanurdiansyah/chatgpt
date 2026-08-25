import { expect, test } from "@playwright/test";

const themes = ["professional", "noc", "finance"] as const;

test.describe("showcase smoke", () => {
  test("loads without browser errors", async ({ page }) => {
    const consoleErrors: string[] = [];
    const pageErrors: string[] = [];

    page.on("console", (message) => {
      if (message.type() === "error") consoleErrors.push(message.text());
    });
    page.on("pageerror", (error) => pageErrors.push(error.message));

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

    expect(consoleErrors, consoleErrors.join("\n")).toEqual([]);
    expect(pageErrors, pageErrors.join("\n")).toEqual([]);
  });

  test("renders on mobile without horizontal overflow", async ({ page }) => {
    await page.goto("/");
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth);
    expect(overflow).toBe(false);
  });
});
