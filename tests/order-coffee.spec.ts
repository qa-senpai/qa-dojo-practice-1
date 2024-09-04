import { test, expect, Locator } from "@playwright/test";

// яка кількість тестів в одному файлі?
// - скільки потрібно.

test.beforeEach(async ({ page }) => {
  await page.goto("https://coffee-cart.app");
});

test("DJ-1 - it should show promotion message", async ({ page }) => {
  const espressoCup: Locator = page.locator('[data-test="Espresso"]');
  const macchiatoCup: Locator = page.locator(
    '[data-test="Espresso_Macchiato"]'
  );
  const cappuccinoCup: Locator = page.locator('[data-test="Cappuccino"]');
  const promoMessage: Locator = page.getByRole("button", {
    name: "Yes, of course!",
  });
  const skipPromoMessage: Locator = page.getByRole("button", {
    name: "Nah, I'll skip.",
  });

  await espressoCup.click();
  await macchiatoCup.click();
  await cappuccinoCup.click();
  await expect(promoMessage).toBeVisible();
  await expect(skipPromoMessage).toBeVisible();
  await expect(page.locator("#app")).toContainText(
    "It's your lucky day! Get an extra cup of Mocha for $4."
  );
});
