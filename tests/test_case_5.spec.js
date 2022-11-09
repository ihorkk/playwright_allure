const { test, expect } = require('@playwright/test');
const { MainPage } = require('../pages/mainpage');


test('should check main menu buttons', async ({ page }) => {
    const mainpage = new MainPage(page);
    await mainpage.goto();
    for (let i=0; i<9; i++) {
        await mainpage.menuButtons.nth(i).click();
        await expect(mainpage.content).toBeVisible();
    }
});
