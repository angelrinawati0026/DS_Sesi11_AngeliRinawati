const { $ } = require('@wdio/globals')
const Page = require('./page');

const varCart = {
    iconQtyCart : $('#shopping_cart_container.shopping_cart_container a.shopping_cart_link span'),
    textcartPage : $('.title'),
    removeProduct :  $('#remove-sauce-labs-bike-light'),
    addMoreProduk : $('#continue-shopping'),
    buttonCartBike : $('#add-to-cart-sauce-labs-bike-light'),    
}

class CartPage extends Page {
    async cartPageFromHome() {
        await varCart.iconQtyCart.click();
        expect(browser).toHaveUrlContaining('/cart.html')
        expect(varCart.textcartPage).toBeDisplayed()
    }

    async removecartPage() {
        expect(varCart.textcartPage).toBeDisplayed()
        await browser.pause(3000)
        await varCart.removeProduct.click();
    }

    async addProductToCart() {
        expect(varCart.textcartPage).toBeDisplayed()
        await varCart.addMoreProduk.click();
    }

    open () {
        return super.open('/cart.html'); //karna url nya sama kalo di halaman login dengan base url
    }
}

module.exports = new CartPage();
