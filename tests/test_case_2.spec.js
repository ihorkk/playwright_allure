const { test, expect } = require('@playwright/test');


test('should sign in with valid credentials', async ({ page }) => {
  await page.goto('https://www.redmine.org');
  await page.locator('a[class=login]').click();
  await page.locator('#username').fill('luxequality00');
  await page.locator('#password').fill('Random123');
  await page.locator('input[type=submit]').click();
  await expect(page.locator('#account')).toBeVisible();
});
