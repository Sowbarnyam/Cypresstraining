describe("Navigation" , function(){
    Cypress.on('uncaught:exception', (err, runnable) => {
        // You can check for specific errors here
        // If you want to ignore all uncaught exceptions, return false
        // This will not stop the test, even if an uncaught exception occurs
        return false;
      });
      
    it("Navigation demo " , function(){

        cy.visit("https://demo.opencart.com/")
        cy.title().should('eq','Your Store')
        cy.get("body > main:nth-child(4) > div:nth-child(1) > nav:nth-child(1) > div:nth-child(3) > ul:nth-child(1) > li:nth-child(7) > a:nth-child(1)").click()
        cy.wait(5000)
        cy.get("div[id='content'] h2").should("have.text","Cameras") 
        cy.go('back')
        cy.title().should('eq','Your Store')
        cy.go('forward') 
        cy.go(-1) 
        cy.go(1) 
        cy.reload()

    })

})