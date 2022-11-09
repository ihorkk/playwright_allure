const { test, expect } = require('@playwright/test');
const { MainPage } = require('../pages/mainpage');
const { RegisterPage } = require('../pages/registerpage');
const { LoginPage } = require('../pages/loginpage');


test('should sign up with valid credentials', async ({ page }) => {
    const mainpage = new MainPage(page);
    const registerpage = new RegisterPage(page);
    const loginpage = new LoginPage(page);
    await mainpage.goto();
    await mainpage.registerButtoClick();
    await registerpage.register("luxequality02", "Random123", "FirstName", "LastName", "luxeq@luxequality.com");
    await expect(loginpage.flashNotice).toBeVisible();
});
