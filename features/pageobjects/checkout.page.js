const { $ } = require('@wdio/globals')
const Page = require('./page');

const varCheckout = {
    textcartPage : $('.title'),
    buttonCheckout : $('#checkout'),
    fieldFirstName : $('#first-name'),
    fieldLastName : $('#last-name'),
    fieldPostalCode : $('#postal-code'),
    buttonContinue : $('#continue'),
    buttonFinish : $('#finish')
}

class CheckoutPage extends Page {
    async checkoutStepOne() {
        expect(varCheckout.textcartPage).toBeDisplayed()
        await varCheckout.buttonCheckout.click();
    }

    async fillDataInformation(firstname) {
        await varCheckout.fieldFirstName.waitForDisplayed({ timeout: 2500 });
        await varCheckout.fieldFirstName.setValue(firstname);
        await varCheckout.fieldLastName.setValue(process.env.LAST_NAME);
        await varCheckout.fieldPostalCode.setValue(process.env.POSTAL_CODE);
        await varCheckout.buttonContinue.click();
        expect(browser).toHaveUrlContaining('/checkout-step-two.html')
        expect(varCheckout.textcartPage).toBeDisplayed()
        await varCheckout.buttonFinish.click();
        expect(browser).toHaveUrlContaining('checkout-complete.html')
        expect(varCheckout.textcartPage).toBeDisplayed()
    }

    open () {
        return super.open('/checkout-step-one.html'); //karna url nya sama kalo di halaman login dengan base url
    }
}

module.exports = new CheckoutPage();
