import { test, expect, Locator } from "@playwright/test";

test("has title", async ({ page }) => {
  const baseUrl = "https://playwright.dev/";
  const gettingStartedUrl = "https://playwright.dev/gettingStarted";
  const githubUrl = "https://github.io/";

  await page.goto(baseUrl);

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);

  const banners: Array<Locator> = await page
    .locator('//div[@class="categories-slider__image"]')
    .all();

  await expect(page.locator("")).toBeFalsy();
});

test("get started link", async ({ page }) => {
  await page.goto("https://playwright.dev/");

  // Click the get started link.
  await page.getByRole("link", { name: "Get started" }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(
    page.getByRole("heading", { name: "Installation" })
  ).toBeVisible();
});
