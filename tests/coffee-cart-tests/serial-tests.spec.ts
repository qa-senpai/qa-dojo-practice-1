import { test, Page, expect } from "@playwright/test";

test.describe.configure({ mode: "serial" });

let page: Page;

test.beforeAll(async ({ browser }) => {
  page = await browser.newPage();
});

test.afterAll(async () => {
  await page.close();
});

test("test 1 ", async () => {
  await test.step("1", async () => {
    await page.goto("https://coffee-cart.app/");
    await page.locator("").waitFor({ state: "visible" });

    await page.waitForTimeout(10_000);
  });

  await test.step("2", async () => {
    await page.goto("https://coffee-cart.app/");
    console.log(2);
  });

  await test.step("3", async () => {
    await page.goto("https://coffee-cart.app/");
    console.log(3);
  });
});

test("test 2", async () => {
  await page.goto("https://coffee-cart.app/");
  console.log(2);
});

test("test  3", async () => {
  await page.goto("https://coffee-cart.app/");
  console.log(3);
});
