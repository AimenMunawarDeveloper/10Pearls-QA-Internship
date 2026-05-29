import InventoryPage from "../pages/InventoryPage";
import ProductPage from "../pages/ProductPage";

const inventoryPage= new InventoryPage();
const productPage= new ProductPage();

describe("Inventory Tests",()=>{
    beforeEach(()=>{
        cy.login("standard_user","secret_sauce");
    });

    it("product listing validation",()=>{
        inventoryPage.inventoryList().should("be.visible");
        inventoryPage.inventoryItem().should("have.length.greaterThan",0);
        inventoryPage.productNames().should("have.length.greaterThan",0);
        inventoryPage.productPrices().should("have.length.greaterThan",0);
    })

    it ("product navigation validation",()=>{
        inventoryPage.clickFirstProduct();
        productPage.productTitle().should("be.visible");
        productPage.productPrice().should("be.visible");
    })
})