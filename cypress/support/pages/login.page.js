 
 class LoginPage {
    elements = {
        loginForm : () => cy.get('#login_button_container'),
        usernameInput : () => cy.get('#user-name'),
        passwordInput : () => cy.get('#password'),    
        loginButton : () => cy.get('#login-button'),    
       }

       visitSauceDemo() {
        return cy.visit('https://www.saucedemo.com/')
       }

       login(username, password) {
        this.elements.usernameInput().type(username);
        this.elements.passwordInput().type(password);
        this.elements.loginButton().click();
       }

       expectLoginPageIsDisplayed() {
        this.elements.loginForm().should('be.visible');
       }
 }

 const loginPage = new LoginPage();
 export {loginPage};