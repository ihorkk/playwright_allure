const { test, expect } = require('@playwright/test');
const { MainPage } = require('../pages/mainpage');
const { LoginPage } = require('../pages/loginpage');
const { UserPage } = require('../pages/userpage');


test('should sign in with valid credentials', async ({ page }) => {
    const mainpage = new MainPage(page);
    const loginpage = new LoginPage(page);
    const userpage = new UserPage(page);
    await mainpage.goto();
    await mainpage.loginButtonClick();
    await loginpage.login("luxequality00", "Random123");
    await expect(userpage.usermenu).toBeVisible();
});
