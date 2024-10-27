import { Page } from '@playwright/test';

export class HomePage {
    private page: Page;

    constructor(page: Page) {
      this.page = page;
    }

  async goto() {
    await this.page.goto('/web/index.php/auth/login');
  }
}
