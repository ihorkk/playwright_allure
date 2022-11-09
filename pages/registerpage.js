exports.RegisterPage = class RegisterPage {
    constructor(page) {
        this.loginInput = page.locator('#user_login');
        this.passwordInput = page.locator('#user_password');
        this.confirmpasswordInput = page.locator('#user_password_confirmation');
        this.firstNameInput = page.locator('#user_firstname');
        this.lastNameInput = page.locator('#user_lastname');
        this.emailInput = page.locator('#user_mail');
        this.submitButton = page.locator('input[name=commit]');
    }

    async register (userlogin, userpassword, userfirstname, userlastname, useremail) {
        await this.loginInput.type(userlogin);
        await this.passwordInput.type(userpassword);
        await this.confirmpasswordInput.type(userpassword);
        await this.firstNameInput.type(userfirstname);
        await this.lastNameInput.type(userlastname);
        await this.emailInput.type(useremail);
        await this.submitButton.click();
    }
}