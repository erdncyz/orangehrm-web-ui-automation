import { Page, test, expect } from '@playwright/test';

export class LoginPage {
  private page: Page;

  private usernameInput = 'input[name="username"]';
  private passwordInput = 'input[name="password"]';
  private loginButton = 'button[type="submit"]';

  constructor(page: Page) {
    this.page = page;
  }

  async fillUsername(username: string) {
    await this.page.fill(this.usernameInput, username);
  }
  
  async fillPassword(password: string) {
    await this.page.fill(this.passwordInput, password);
  }
  
  async clickLoginButton() {
    await this.page.click(this.loginButton);
  }
  
  async login(username: string, password: string) {
    await this.fillUsername(username);
    await this.fillPassword(password);
    await this.clickLoginButton();
  }
}
