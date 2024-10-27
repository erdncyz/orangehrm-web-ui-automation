import { Page } from '@playwright/test';

export class LogoutPage {
    private page: Page;

    private userDropdownTab = '.oxd-userdropdown-tab';
    private logoutLink = 'a[href="/web/index.php/auth/logout"]';

    constructor(page: Page) {
      this.page = page;
    }

    async logout() {
        await this.page.click(this.userDropdownTab);
        
        await this.page.click(this.logoutLink);
    }
}
