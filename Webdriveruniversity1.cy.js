Cypress.on("uncaught:exception", (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false;
})
describe('Webdriver university contact us',function()
   {
       it('Validate contact us page',function()
       {
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.url().should('eq', 'https://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('#nav-title').click()
       cy.go('back')
        cy.get('#contact_form > input:nth-child(1)').type('Sowbarnya').should('be.visible')
        cy.get('#contact_form > input:nth-child(2)').type('Kamalesh').should('be.visible')
        cy.get('#contact_form > input:nth-child(3)').type('lashu@gmail.com').should('be.visible')
        cy.get('#contact_form > textarea').type('If you have questions contact us')
        cy.get('#form_buttons > input:nth-child(1)').click().should('be.visible')
        cy.get('#contact_form > input:nth-child(1)').type('Sowbarnya').should('be.visible')
        cy.get('#contact_form > input:nth-child(2)').type('Kamalesh').should('be.visible')
        cy.get('#contact_form > input:nth-child(3)').type('lashu@gmail.com').should('be.visible')
        cy.get('#contact_form > textarea').type('If you have questions contact us')
        cy.get('#form_buttons > input:nth-child(2)').should('be.visible')
        
       })

   })