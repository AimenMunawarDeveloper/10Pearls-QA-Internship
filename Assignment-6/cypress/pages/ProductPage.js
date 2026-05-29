class ProductPage{
    productTitle(){
        return cy.get('.inventory_details_name');
    }
    productPrice(){
        return cy.get('.inventory_details_price');
    }
}

export default ProductPage;