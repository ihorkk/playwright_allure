const { test, expect } = require('@playwright/test');
const { MainPage } = require('../pages/mainpage');
const { SearchPage } = require('../pages/searchpage');


test('should check search input', async ({ page }) => {
    const mainpage = new MainPage(page);
    const searchpage = new SearchPage(page);
    await mainpage.goto();
    await mainpage.searchInputValue('LuxeQuality');
    await expect(searchpage.searchTypeButtons).toBeVisible();
});
