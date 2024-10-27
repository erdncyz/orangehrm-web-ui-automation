import { test } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { HomePage } from '../pages/homePage';
import { userCredentials } from '../config/user.config';
import { VerifyLoginPage } from '../pages/verifyLoginPage';


test.describe('Orange HRM Login', () => {
  const { admin } = userCredentials; 

  test('Login with existing admin user', async ({ page }) => {
    const homePage = new HomePage(page);
    const loginPage = new LoginPage(page);
    const verifyLoginPage = new VerifyLoginPage(page);

        await homePage.goto();
    
    await loginPage.login(admin.username, admin.password);
    await verifyLoginPage.verifyLogin();
  });
});
