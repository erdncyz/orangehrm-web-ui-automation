import { Page } from '@playwright/test';

export class AdminPage {
  private page: Page;

  private adminSectionLink = 'a[href="/web/index.php/admin/viewAdminModule"]';
  private addButton = 'button[class="oxd-button oxd-button--medium oxd-button--secondary"]';
  private userRoleDropdown = '(//div[@class="oxd-select-text oxd-select-text--active"])[1]';
  private employeeNameInput = 'input[placeholder="Type for hints..."]';
  private employeeDropdownOption = 'div[role="option"]';
  private employeeListbox = 'div[role="listbox"]'; // Listbox locator
  private usernameInput = '(//input[@class="oxd-input oxd-input--active"])[2]';
  private statusDropdown = '(//div[@class="oxd-select-text oxd-select-text--active"])[2]';
  private passwordInput = '(//input[@type="password"])[1]';
  private confirmPasswordInput = '(//input[@type="password"])[2]';
  private saveButton = 'button[type="submit"]';

  constructor(page: Page) {
    this.page = page;
  }

  async navigateToAdminSection() {
    await this.page.click(this.adminSectionLink);
  }

  async addNewAdminUser(newAdminUsername: string, newAdminPassword: string, employeeName: string) {
    
    await this.page.click(this.addButton);
    
    await this.page.click(this.userRoleDropdown);
    await this.page.locator(this.employeeDropdownOption).locator('text=Admin').click();

    await this.page.fill(this.employeeNameInput, employeeName);

    await this.page.waitForSelector(this.employeeListbox);  // Waiting for the listbox to appear
    await this.page.click(`${this.employeeDropdownOption}:has-text("${employeeName}")`);

    await this.page.fill(this.usernameInput, newAdminUsername);

    await this.page.click(this.statusDropdown);
    await this.page.locator(this.employeeDropdownOption).locator('text=Enabled').click();

    await this.page.fill(this.passwordInput, newAdminPassword);
    await this.page.fill(this.confirmPasswordInput, newAdminPassword);

    await this.page.click(this.saveButton);
  }
}
