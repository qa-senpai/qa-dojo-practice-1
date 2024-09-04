import { test, expect } from '@playwright/test';

test.beforeEach(async( {page} ) => {
  await page.goto('https://coffee-cart.app/')
})

test('cc-1 - promotion message', async ({ page }) => {
  await page.locator('[data-test="Espresso"]').click();
  await page.locator('[data-test="Espresso_Macchiato"]').click();
  await page.locator('[data-test="Cappuccino"]').click();
  await expect(page.getByRole('button', { name: 'Yes, of course!'})).toBeVisible();
  await expect(page.getByRole('button', { name: 'Nah, I\'ll skip.'})).toBeVisible();
  await expect(page.getByText('It\'s your lucky day! Get an extra cup of Mocha for $4.')).toBeVisible();
});

test('cc-2 - skip promotion', async( {page} ) => {
  await page.locator('[data-test="Espresso"]').click();
  await page.locator('[data-test="Espresso_Macchiato"]').click();
  await page.locator('[data-test="Cappuccino"]').click();
  await page.getByRole('button', { name: 'Nah, I\'ll skip.' }).click();
  await expect(page.getByLabel('Cart page')).toContainText('(3)');
});

test('cc-3 - accept promotion', async( {page} ) => {
  await page.locator('[data-test="Espresso"]').click();
  await page.locator('[data-test="Espresso_Macchiato"]').click();
  await page.locator('[data-test="Cappuccino"]').click();
  await page.getByRole('button', { name: 'Yes, of course!' }).click();
  await expect(page.getByLabel('Cart page')).toContainText('(4)');
})