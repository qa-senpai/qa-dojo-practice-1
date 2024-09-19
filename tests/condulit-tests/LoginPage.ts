import { Page } from "@playwright/test";

export function LoginPage() {
  (this.usernameSelector = "input[placeholder = 'Email']"),
    (this.passwordSelector = "input[placeholder = 'Password']"),
    (this.loginButtonSelector = "button");
}

LoginPage.prototype.login = async function (
  page: Page,
  username: string,
  pass: string
) {
  await page.locator(this.usernameSelector).fill(username);
  await page.locator(this.passwordSelector).fill(pass);
  await page.locator(this.loginButtonSelector).click();
};
