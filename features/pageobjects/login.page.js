const { $, expect } = require('@wdio/globals')
const Page = require('./page');

const elemen = {
     // variabel global
     fieldUsername : $('#user-name'),
     fieldPassword : $('#password'),
     buttonLogin : $('#login-button'),
     errorLockedOutUser : (dynamicMessage) => $(`//h3[text()="${dynamicMessage}"]`)
}

class LoginPage extends Page {
    async login (username) {
        await elemen.fieldUsername.waitForDisplayed({ timeout: 2500 });
        await elemen.fieldUsername.setValue(username);
        await elemen.fieldPassword.setValue(process.env.PASSWORD_SAUCEDEMO);
        await elemen.buttonLogin.click();
    }

    async loginInvalidPass (username) {
        await elemen.fieldUsername.waitForDisplayed({ timeout: 2500 });
        await elemen.fieldUsername.setValue(username);
        await elemen.fieldPassword.setValue(process.env.PASSWORD_FALSE);
        await elemen.buttonLogin.click();
    }
    async loginEmptyData (username) {
        await elemen.fieldUsername.waitForDisplayed({ timeout: 2500 });
        await elemen.fieldUsername.setValue(username);
        await elemen.fieldPassword.setValue(process.env.PASSWORD_EMPTY);
        await elemen.buttonLogin.click();
    }


    async validateLockedOutUserError (message) {
        await elemen.errorLockedOutUser(message).waitForDisplayed({ timeout: 2500 });
        await expect(elemen.errorLockedOutUser(message)).toBeDisplayed()
    }

    open () {
        return super.open('/'); // NOTE: will open https://www.saucedemo.com/
    }
}

module.exports = new LoginPage();
