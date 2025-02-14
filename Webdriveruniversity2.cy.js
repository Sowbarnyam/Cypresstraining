Cypress.on("uncaught:exception", (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false;
})
describe('Webdriver university login page',function()
   {
    it('Login page',function()
{
    cy.visit('https://webdriveruniversity.com/Login-Portal/index.html?')
    cy.get('#text').type('Sowbarnya').should('be.visible')
    cy.get('#password').type('Kamalesh').should('be.visible')
    cy.get('#login-button').click()
})
})