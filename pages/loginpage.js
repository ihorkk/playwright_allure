exports.LoginPage = class LoginPage {
    constructor(page) {
        this.loginInput = page.locator('#username');
        this.passwordInput = page.locator('#password');
        this.submitButton = page.locator('input[type=submit]');
        this.flashNotice = page.locator('#flash_notice');
    }

    async login (userlogin, userpassword) {
        await this.loginInput.type(userlogin);
        await this.passwordInput.type(userpassword);
        await this.submitButton.click();
    }
}