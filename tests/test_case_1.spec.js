const { test, expect } = require('@playwright/test');


test('should sign up with valid credentials', async ({ page }) => {
  await page.goto('https://www.redmine.org');
  await page.locator('a[class=register]').click();
  await page.locator('#user_login').fill('luxequality200');
  await page.locator('#user_password').fill('Random123');
  await page.locator('#user_password_confirmation').fill('Random123');
  await page.locator('#user_firstname').fill('FirstName');
  await page.locator('#user_lastname').fill('LastName');
  await page.locator('#user_mail').fill('kewev92273@ktasy.com');
  await page.locator('input[name=commit]').click();
  await expect(page.locator('#flash_notice')).toBeVisible();
});
