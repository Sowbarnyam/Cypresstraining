Cypress.on("uncaught:exception", (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false;
})
describe('DesiCrew Homepage Invalid Tests', () => {
    it('Visits the DesiCrew loginpage', () => {
        cy.visit('https://desicrewdtrial.crystalhr.com/Account/Login?returnUrl=%2FHome%2FIndex')
        cy.get('#login-box > div > h4').should('be.visible')
        cy.get('#Username').type('DC48199999')
        cy.get('#Password').type('Sowbarnyamuthusamy')
        cy.get('#btnLogin').click()
        cy.get('#frmLogin > fieldset > div.toolbar.clearfix > div > a').click()
       // cy.get('#Username').type('DC4818')
        cy.get('#btnReset').should('be.visible')
        cy.get('#forgot-box > div.center > a').click()
    })
    it('Visits the DesiCrew  valid loginpage', () => {
        cy.visit('https://desicrewdtrial.crystalhr.com/Account/Login?returnUrl=%2FHome%2FIndex')
        cy.get('#login-box > div > h4').should('be.visible')
        cy.get('#Username').type('DC4818')
        cy.get('#Password').type('Sowbarnya@0508')
        cy.get('#btnLogin').click()
        
    })  
})
