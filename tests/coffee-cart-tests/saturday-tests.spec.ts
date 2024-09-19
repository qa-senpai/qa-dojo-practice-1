import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("https://coffee-cart.app/");

  const caffeeTypes = ['[data-test="Cappuccino"]'];

  for (const cup of caffeeTypes) {
    const cupIng = page.locator(cup);
    const text = await page.locator(cup).innerText();

    const expectedCappuccinoIng = [
      "Cappuccino",
      "espresso",
      "steamed milk",
      "milk foam",
    ];
    const actualIng = text.split(/\n/);

    expect(expectedCappuccinoIng).toEqual(actualIng);

    expect(page.locator(cup)).toBeVisible();
  }

  //TODO:
  //TODO:
  //TODO:
  await page.getByText("Espresso ${name} $12.00espressomilk foam").click();
  await page.getByText("Espresso Macchiato $12.00espressomilk foam").click();
  await page.getByText("Espresso Late $12.00espressomilk foam").click();
  await page.getByText("Espresso Macchiato $12.00espressomilk foam").click();
  await expect(page.locator("[class = 'snackbar success']")).toContainText("");

  async function fillName(name: string) {
    await page
      .getByPlaceholder("Name")
      .fill(name);
  };

  async function clickOnDrinkByName(name: string) {
    await page
      .getByTestId(name)
      .click();
  };

  //   // імітація поведінки
  //   await page
  //     .getByText("Espresso Macchiato $12.00espressomilk foam")
  //     .pressSequentially("test", { delay: 100 });

  //   await expect(
  //     page.getByText("Espresso Macchiato $12.00espressomilk foam")
  //   ).toHaveValue("test");

  //   await page
  //     .getByText("Espresso Macchiato $12.00espressomilk foam")
  //     .fill("test");
  //   await expect(
  //     page.getByText("Espresso Macchiato $12.00espressomilk foam")
  //   ).toHaveValue("test");

  //   await expect(page.locator('[data-test="Espresso"]')).toBeVisible();
  //   await expect(page.locator('[data-test="Espresso"]')).toBeHidden();

  //   // actual text: "espresso !!!"
  //   await expect(page.locator('[data-test="Espresso"]')).toContainText(
  //     "espresso"
  //   );
  //   await expect(page.locator('[data-test="Espresso"]')).toHaveText("espresso");
});
