import { test, expect } from '@playwright/test';

test.beforeEach(async( {page} ) => {
  await page.goto('https://coffee-cart.app/');
  await page.locator('[data-test="Mocha"]').click();
  await page.locator('[data-test="Espresso"]').click();
  await page.locator('[data-test="Americano"]').click();
})

test('cc4-remove-item', async ({ page }) => {
  await page.getByLabel('Cart page').click();
  await page.getByLabel('Remove all Americano').click();
  await page.getByLabel('Remove all Espresso').click();
  await page.getByLabel('Remove all Mocha').click();
  await expect(page.getByText('No coffee, go add some.')).toBeVisible();
  await expect(page.getByLabel('Cart page')).toContainText('(0)');
});