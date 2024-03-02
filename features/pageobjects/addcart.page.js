const { $ } = require('@wdio/globals')
const Page = require('./page');

const varAddCart = {
    iconCart : $('.shopping_cart_link'),
    iconBack : $('#back-to-products'),
    buttonCartBackpack : $('#add-to-cart-sauce-labs-backpack'),
    buttonCartBike : $('#add-to-cart-sauce-labs-bike-light'),
    buttonCartBackpackRemove : $('#remove-sauce-labs-backpack'),
    buttonCartBikeRemove :  $('#remove-sauce-labs-bike-light'),
    iconQtyCart : $('#shopping_cart_container.shopping_cart_container a.shopping_cart_link span')
}
class AddCartPage extends Page {

    async addToCartFromHome() {
        expect(varAddCart.iconCart).toBeDisplayed()
        await varAddCart.buttonCartBike.click();
    }

    async addToCartFromDetail() {
        expect(varAddCart.iconBack).toBeDisplayed()
        await varAddCart.buttonCartBackpack.click();
    }

    async successAddToCartHome() {
        await varAddCart.buttonCartBikeRemove.waitForDisplayed();
        await varAddCart.iconQtyCart.waitForDisplayed();
    }

    async successAddToCartDetail() {
        await varAddCart.buttonCartBackpackRemove.waitForDisplayed();
        await varAddCart.iconQtyCart.waitForDisplayed();
    }
    
    open () {
        return super.open('/inventory.html'); //karna url nya sama kalo di halaman login dengan base url
    }
}

module.exports = new AddCartPage();
