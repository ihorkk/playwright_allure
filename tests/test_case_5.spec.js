const { test, expect } = require('@playwright/test');


test('should check main menu buttons', async ({ page }) => {
    await page.goto('https://www.redmine.org');
    const buttons = await page.locator('//*[@id="main-menu"]/ul/li');
    const count = await buttons.count();
    const content = await page.locator('#content');
    for (let i=0; i<count; i++) {
        await buttons.nth(i).click();
        await expect(content).toBeVisible();
    }
});
