const { test, expect } = require('@playwright/test');


test('should make screenshot of books', async ({ page }) => {
  await page.goto('https://www.redmine.org');
  await expect(page.locator('table[class=noborder]')).toBeVisible();
  const books = await page.$$('td[style="text-align:center;"]');
  for (let book of books) {
    await book.screenshot({ path: 'screenshot' + Math.random() + '.png' });
  }
});
