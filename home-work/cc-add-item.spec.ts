import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("https://coffee-cart.app/");
});

test("cc-5-match-price", async ({ page }) => {
  const initialTotalText = await page
    .locator('[data-test="checkout"]')
    .textContent();
  const initialTotal = parseFloat(initialTotalText.match(/\$(\d+\.\d+)/)[1]);

  await page.locator('[data-test="Cappuccino"]').click();

  const cappuccinoPrice = 19.0;

  const finalTotalText = await page
    .locator('[data-test="checkout"]')
    .textContent();
  const finalTotal = parseFloat(finalTotalText.match(/\$(\d+\.\d+)/)[1]);

  await expect(finalTotal).toEqual(initialTotal + cappuccinoPrice);
});

test("cc-6-item-appears-in-cart", async ({ page }) => {
  await page.goto("https://coffee-cart.app/");
  await page.locator('[data-test="Espresso"]').click();
  await page.locator('[data-test="Cappuccino"]').click();
  await page.locator('[data-test="Mocha"]').click();
  await page.getByLabel("Cart page").click();

  const coffeeTypes = ["Cappuccino", "Espresso", "Mocha"];
  for (const coffee of coffeeTypes) {
    await expect(
      page.locator("div").filter({ hasText: new RegExp(`^${coffee}$`) })
    ).toBeVisible();
  }
});
