describe('My First Test', () => {
    it('Visit the google', () => {
      cy.visit('https://www.google.com/')
      cy.title().should('eq','Google')
    })
  })