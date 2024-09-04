import test, { chromium, Page } from "@playwright/test";

let page: Page;

test.beforeAll("Signing in...", async ({ page }) => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  page = await context.newPage();

  //Sign In
  await page.goto("https://demo.learnwebdriverio.com/");
  await page.locator(`//a[@href='/login']`).click();
  await page
    .locator(`//input[@placeholder='Email']`)
    .fill(`olesuser1@yopmail.com`);
  await page.locator(`//input[@placeholder='Password']`).fill(`test1234`);
  await page.locator(`//button[contains(text(), 'Sign in')]`).click();
  //   await page.waitForTimeout(2000);
});

async function logIn(page: Page) {
  await page.goto("https://demo.learnwebdriverio.com/");
  await page.locator(`//a[@href='/login']`).click();
  await page
    .locator(`//input[@placeholder='Email']`)
    .fill(`olesuser1@yopmail.com`);
  await page.locator(`//input[@placeholder='Password']`).fill(`test1234`);
  await page.locator(`//button[contains(text(), 'Sign in')]`).click();
}

test("testing nav element", async ({ page }) => {
  await logIn(page);
  await page.goto("https://playwright.dev/docs/intro");
  await page.locator(`[href="#"]`, { hasText: "Playwright Test" }).click();
  await page.locator(`//*[@href="#" and text() = 'Playwright Test']`).click();
});
