const { test, expect } = require('@playwright/test');


test('should check search input', async ({ page }) => {
  await page.goto('https://www.redmine.org');
  await page.locator('#q').fill('LuxeQuality');
  await page.keyboard.press('Enter');
  await expect(page.locator('#search-types')).toBeVisible();
});
