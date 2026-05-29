class LoginPage{
    userNameInput(){
        return cy.get('[data-test="username');
    }
    passwordInput(){
        return cy.get('[data-test="password"]');
    }
    loginButton(){
        return cy.get('[data-test="login-button"]');
    }
    errorMessage(){
        return cy.get('[data-test="error"]');
    }
    visit(){
        return cy.visit("/")
    }
    clickLogin(){
        this.loginButton().click();
    }
    enterUsername(username){
        this.userNameInput().type(username);
    }
    enterPassword(password){
        this.passwordInput().type(password);
    }
    login(username,password){
        this.enterUsername(username);
        this.enterPassword(password);
        this.clickLogin();
    }
}
export default LoginPage;