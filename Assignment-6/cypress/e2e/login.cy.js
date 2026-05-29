import LoginPage from "../pages/LoginPage";

const loginPage= new LoginPage();

describe("Login Page Test Cases",()=>{
    it("Invalid Login",()=>{
        loginPage.visit();
        loginPage.login("invalid_username","invalid_password");
        loginPage.errorMessage().should("contain","Username and password do not match");
    })
    it("Valid Login",()=>{
        loginPage.visit();
        loginPage.login("standard_user","secret_sauce");
        cy.url().should("include","/inventory.html");
        cy.get(".title").should("contain","Products")
    })
})