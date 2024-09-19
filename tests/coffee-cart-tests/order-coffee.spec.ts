import { test, expect, Locator } from "@playwright/test";

// яка кількість тестів в одному файлі?
// - скільки потрібно.

test.beforeEach(async ({ page }) => {
  await page.goto("https://coffee-cart.app");
});

test("DJ-1 - it should show promotion message", async ({ page }) => {
  const promoMessage: Locator = page.getByRole("button", {
    name: "Yes, of course!",
  });
  const skipPromoMessage: Locator = page.getByRole("button", {
    name: "Nah, I'll skip.",
  });

  const beverages = ["Espresso", "Espresso_Macchiato", "Cappuccino"];

  for (const beverage of beverages) {
    await page.locator(`[data-test = '${beverage}']`).click();
  }

  await expect(promoMessage).toBeVisible();
  await expect(skipPromoMessage).toBeVisible();
  await expect(page.locator("#app")).toContainText(
    "It's your lucky day! Get an extra cup of Mocha for $4."
  );
});
