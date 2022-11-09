exports.MainPage = class MainPage {
    constructor(page) {
        this.page = page;
        this.registerButton = page.locator('a[class=register]');
        this.loginButton = page.locator('a[class=login]');
        this.searchInput = page.locator('#q');
        this.redmineBooks = page.locator('table[class=noborder]');
        this.redmineBook = page.locator('td[style="text-align:center;"]');
        this.menuButtons = page.locator('#main-menu ul li');
        this.content = page.locator('#content');
    }

    async goto() {
        await this.page.goto('https://www.redmine.org');
    }

    async registerButtoClick() {
        await this.registerButton.click();
    }

    async loginButtonClick() {
        await this.loginButton.click();
    }

    async searchInputValue(value) {
        await this.searchInput.fill(value);
        await this.page.keyboard.press('Enter');
    }
}
