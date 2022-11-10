const { test, expect } = require('@playwright/test');
const { MainPage } = require('../pages/mainpage');


test('should make screenshot of books', async ({ page }, testInfo) => {
    const mainpage = new MainPage(page);
    await mainpage.goto();
    await expect(mainpage.redmineBooks).toBeVisible();
    for (let i=0; i<3; i++) {
      await testInfo.attach("basic-page-screen", {
      body: await mainpage.redmineBook.nth(i).screenshot(),
      contentType: "image/png",
    })
  }
});

