import test, { expect } from "@playwright/test";

test("WL-1 user registration, should be successful", async ({ page }) => {
  const randomNumber = Math.floor(Math.random() * 9999);
  const username = `coach${randomNumber}`; // Coach1214

  await page.goto("https://demo.learnwebdriverio.com/", {
    timeout: 60_000,
  });
  await page.locator('//a[@href="/register"]').click();
  await page.locator('//input[@placeholder="Username"]').fill(username);
  await page
    .locator('//input[@placeholder="Email"]')
    .fill(`${randomNumber}coach@gm.com`);
  await page.locator('//input[@placeholder="Password"]').fill("12345");
  await page.locator(`//button[contains(text(), 'Sign up')]`).click();
  await expect(
    page.locator(`//a[contains(text(), '${username}')]`)
  ).toBeVisible();
});

async function addOneDrinkByName(name: string) {
  await page.getByLabel(`Add one ${name}`).click();
}
// клінап на юай
test.afterEach(async ({ page }) => {});

/*
    створити робочій механізм клінапу
    - в стан, до початку тесту 
    - клінап через api 1
    - клінап на юайці 2
    - клінап через базу даних 2
*/
