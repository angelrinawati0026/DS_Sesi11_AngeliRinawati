const { $, expect } = require('@wdio/globals')
const Page = require('./page');

//get iconCart () { return $('.shopping_cart_link'); }

const variabel = {
    iconCart : $('.shopping_cart_link'),
    iconFilterNull : $('.product_sort_container'),
    pageFilter : $('#inventory_container.inventory_container'),
    productName : $('.inventory_item_name')
}
class HomePage extends Page {
    
    async validateHomePage() {
        await expect(browser).toHaveUrlContaining('/inventory.html')
        await expect(variabel.iconCart).toBeDisplayed()
    }

    async clicksortingfilter () {
        await variabel.iconFilterNull.click();
    }

    async sortingfilter (filter) {
        (await variabel.iconFilterNull).selectByVisibleText(filter);
    }

    async validateSortingFilter () {
        await variabel.pageFilter.waitForDisplayed();
    }
    
    open () {
        return super.open('/inventory.html');
    }
}

module.exports = new HomePage();
