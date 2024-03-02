const { $ } = require('@wdio/globals')
const Page = require('./page');

const varDetail ={
    iconBack : $('#back-to-products'),
    productItem : (nameProduct) => $(`//div[text()="${nameProduct}"]`),
    iconCart : $('.shopping_cart_link')
}

class DetailPage extends Page {
    async detailProduk(nameProduct) {
        await varDetail.iconCart.waitForDisplayed();
        await varDetail.productItem(nameProduct).click()
        expect(browser).toHaveUrlContaining('/inventory-item.html?id=4')
        
    }

    async buttonBack() {
        await varDetail.iconBack.click();
    }

    open () {
        return super.open('/inventory-item.html?id=1'); //karna url nya sama kalo di halaman login dengan base url
    }
}

module.exports = new DetailPage();
