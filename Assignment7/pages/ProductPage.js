class ProductPage {
    constructor(page) {
        this.page = page;
    }
    async verifyFreeShipping() {
        const bodyText = await this.page.textContent('body');
        return bodyText.includes('Free Shipping');
    }
}

module.exports = ProductPage;