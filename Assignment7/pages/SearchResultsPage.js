class SearchResultsPage {
    constructor(page) {
        this.page = page;
    }
    async applyPriceFilter() {
        await this.page.fill('input[placeholder="Min"]', '500');
        await this.page.fill('input[placeholder="Max"]', '5000');
        await this.page.keyboard.press('Enter');
    }
    async getProductsCount() {
        const products = await this.page.locator('.Bm3ON');
        return await products.count();
    }
    async openFirstProduct() {
        await this.page.locator('.Bm3ON').first().click();
    }
}
module.exports = SearchResultsPage;