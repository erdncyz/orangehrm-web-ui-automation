import { Page, expect } from '@playwright/test';

export class VerifyLoginPage {
    private page: Page;

    private errorAlert = '.oxd-alert-content';
    private dashboardLink = 'a[href="/web/index.php/dashboard/index"]';

    constructor(page: Page) {
        this.page = page;
    }

    async verifyLogin() {
        const errorVisible = await this.page.isVisible(this.errorAlert);
        
        if (errorVisible) {
            console.error('Invalid credentials');
        }
        
        expect(errorVisible).toBeFalsy();

        await this.page.waitForSelector(this.dashboardLink);

        expect(await this.page.isVisible(this.dashboardLink)).toBeTruthy();
    }
}
