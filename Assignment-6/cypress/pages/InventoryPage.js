class InventoryPage{
    inventoryList(){
        return cy.get('.inventory_list');
    }
    inventoryItem(){
        return cy.get(".inventory_item");
    }
    productNames(){
        return cy.get(".inventory_item_name");
    }
    productPrices(){
        return cy.get(".inventory_item_price");
    }
    firstProduct(){
        return cy.get(".inventory_item_name").first();
    }
    clickFirstProduct(){
        this.firstProduct().click();
    }
}

export default InventoryPage;