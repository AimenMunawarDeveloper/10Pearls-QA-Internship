const { test, expect } = require('@playwright/test');

const HomePage = require('../pages/HomePage');
const SearchResultsPage = require('../pages/SearchResultsPage');
const ProductPage = require('../pages/ProductPage');

test('Daraz Automation', async ({ page }) => {
    const homePage = new HomePage(page);
    const searchPage = new SearchResultsPage(page);
    const productPage = new ProductPage(page);
    await homePage.navigate();
    await homePage.searchProduct('electronics');
    await page.waitForSelector('.Bm3ON');
    await searchPage.applyPriceFilter();
    await expect(page.locator('.Bm3ON').first()).toBeVisible();
    const count = await searchPage.getProductsCount();
    console.log('Products Found:', count);
    expect(count).toBeGreaterThan(0);
    await searchPage.openFirstProduct();
    const freeShipping = await productPage.verifyFreeShipping();
    console.log('Free Shipping:', freeShipping);
});