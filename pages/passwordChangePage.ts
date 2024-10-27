import { Page, expect } from '@playwright/test';

export class PasswordChangePage {
  private page: Page;

  private userDropdownTab = '.oxd-userdropdown-tab';
  private changePasswordLink = 'a[href="/web/index.php/pim/updatePassword"]';
  private currentPasswordInput = '(//input[@type="password"])[1]';
  private newPasswordInput = '(//input[@type="password"])[2]';
  private confirmPasswordInput = '(//input[@type="password"])[3]';
  private submitButton = 'button[type="submit"]';
  private successMessage = '.oxd-text.oxd-text--p.oxd-text--toast-message.oxd-toast-content-text';

  constructor(page: Page) {
    this.page = page;
  }

  async navigateToChangePassword() {
    await this.page.click(this.userDropdownTab);
    await this.page.click(this.changePasswordLink);
  }

  async fillPasswordFields(password: string, updatedPassword: string) {
    await this.page.fill(this.currentPasswordInput, password);
    await this.page.fill(this.newPasswordInput, updatedPassword);
    await this.page.fill(this.confirmPasswordInput, updatedPassword);
  }

  async submitPasswordChange() {
    await this.page.click(this.submitButton);
  }

  async changePassword(password: string, updatedPassword: string) {
    await this.navigateToChangePassword();
    await this.fillPasswordFields(password, updatedPassword);
    await this.submitPasswordChange();
  }

  async verifyChangePassword() {
    try {
      await this.page.waitForSelector(this.successMessage, { timeout: 5000 });
      const successMessageVisible = await this.page.isVisible(this.successMessage);
      if (!successMessageVisible) {
        console.error('Password change failed');
      }
      expect(successMessageVisible).toBeTruthy();
      console.log('Password change successful');
    } catch (error) {
      console.error('Password change success message not found within the expected time.');
    }
  }
}
