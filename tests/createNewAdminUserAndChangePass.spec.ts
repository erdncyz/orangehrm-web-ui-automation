import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { AdminPage } from '../pages/adminPage';
import { HomePage } from '../pages/homePage';
import { userCredentials } from '../config/user.config';
import { PasswordChangePage } from '../pages/passwordChangePage';
import { LogoutPage } from '../pages/logoutPage';
import { VerifyLoginPage } from '../pages/verifyLoginPage';


test.describe('Create New Admin User And Change Password', () => {
  const { admin, CreateNewAdmin, employee } = userCredentials;

  test('Create new admin user', async ({ page }) => {
    const homePage = new HomePage(page);
    const loginPage = new LoginPage(page);
    const passwordChangePage = new PasswordChangePage(page);
    const logoutPage = new LogoutPage(page);
    const verifyLoginPage = new VerifyLoginPage(page);

    await homePage.goto();
    
    await loginPage.login(admin.username, admin.password);
    
    await verifyLoginPage.verifyLogin();

    const adminPage = new AdminPage(page);
    await adminPage.navigateToAdminSection();
    await adminPage.addNewAdminUser(CreateNewAdmin.username, CreateNewAdmin.password, employee.name);
    await page.waitForTimeout(5000); //S
    
    await logoutPage.logout();

    await loginPage.login(CreateNewAdmin.username, CreateNewAdmin.password);
    await verifyLoginPage.verifyLogin();

    await passwordChangePage.changePassword(CreateNewAdmin.password, CreateNewAdmin.updatedPassword);
    await passwordChangePage.verifyChangePassword();

    await logoutPage.logout();

    await loginPage.login(CreateNewAdmin.username, CreateNewAdmin.updatedPassword);
  });
});
