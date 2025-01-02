Cypress.on('uncaught:exception', (err, runnable) => {
    return false
});
describe('amazon', function()
{
     beforeEach(()=>
     {
     cy.visit("https://www.amazon.in/ ")
     })
     it('amazon sign up', function()
     {
        cy.get('#nav-link-accountList').should('be.visible').click('center')
        cy.wait(1000)
        cy.contains("Create your Amazon account").click({force:true})
        cy.wait(1000)
        cy.get("#ap_customer_name").type("Sowbarnya")
        cy.wait(1000)
        cy.get("#ap_phone_number").type("8056391190")
        cy.wait(1000)
        cy.get('#ap_email').type('sowbarny@gmail.com')
        cy.wait(1000)
        cy.get("#ap_password").type("sowBarnya@0508")
        cy.wait(1000)
        cy.get("#continue").should('be.visible')
    })
    it('amazon homepage title', function()
    {
        cy.title().should('eq', 'Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in')
        cy.url().should('include', 'amazon')
        cy.request("https://www.amazon.in/").should((response) => {
            expect(response.status).to.eq(200)
            cy.get('#nav-xshop > a:nth-child(2)').should('be.visible')
            cy.get('#nav-xshop > a:nth-child(3)').should('be.visible')
            cy.get('#nav-xshop > a:nth-child(4)').should('be.visible')
            cy.get('#nav-xshop > a:nth-child(5)').should('be.visible')
           })
    })
    it('login with positive and negative', function()
     {
        cy.get('#nav-link-accountList').should('be.visible').click('center')
        cy.wait(2000)
        cy.url().should('include','signin?openid')
        cy.title(). should('eq', 'Amazon Sign In')
        cy.wait(2000)
        cy.request("https://www.amazon.in/").should((response) => {
            expect(response.status).to.eq(200)
        })   
     // submit button
        cy.get('#continue').should('be.visible').click('center')
        cy.contains('Enter your email or mobile phone number').should('be.visible')  //error assertion
     //negative invalid credentials
        cy.get('#ap_email').should('be.visible').type('sow123456')
        cy.get('#continue').should('be.visible').click('center')
        cy.contains('There was a problem').should('be.visible')   //error assertion
     //positive valid credentials
        cy.get('#ap_email').clear()
        cy.get('#ap_email').should('be.visible').type('8056391190')
        cy.get('#continue').should('be.visible').click('center')
        cy.url().should('include','signin')
     //negative scenario
        cy.get('#ap_password').should('be.visible').type('sowBarnya@')
        cy.get('#signInSubmit').click({force:true})
        cy.contains('There was a problem').should('be.visible')    //error assertion
     //positive scenario
        cy.get('#ap_password').clear()
        cy.get('#ap_password').should('be.visible').type('sowBarnya@0508')
        cy.get('#signInSubmit').click({force:true})
    })
     //search box(product searching and listing)
     it('Searching products and listing products',function()
    { //perfume for women
        cy.get("#twotabsearchtextbox").type('perfume for women')
        cy.get('#nav-search-bar-form > div.nav-right > div').click() 
        cy.get('#search > div.s-desktop-width-max.s-desktop-content.s-opposite-dir.sg-row > div.s-matching-dir.sg-col-16-of-20.sg-col.sg-col-8-of-12.sg-col-12-of-16 > div > span.rush-component.s-latency-cf-section > div.s-main-slot.s-result-list.s-search-results.sg-row > div:nth-child(6) > div > div > div > div > div > div > div.a-section.a-spacing-small.puis-padding-left-small.puis-padding-right-small > div.a-section.a-spacing-none.a-spacing-top-small.s-title-instructions-style > div')
        .should('be.visible')
        cy.get('#search > div.s-desktop-width-max.s-desktop-content.s-opposite-dir.sg-row > div.s-matching-dir.sg-col-16-of-20.sg-col.sg-col-8-of-12.sg-col-12-of-16 > div > span.rush-component.s-latency-cf-section > div.s-main-slot.s-result-list.s-search-results.sg-row > div:nth-child(6) > div > div > div > div > div > div > div.a-section.a-spacing-small.puis-padding-left-small.puis-padding-right-small > div.a-section.a-spacing-none.a-spacing-top-small.s-price-instructions-style')
        .should('be.visible')
         cy.get('#search > div.s-desktop-width-max.s-desktop-content.s-opposite-dir.sg-row > div.s-matching-dir.sg-col-16-of-20.sg-col.sg-col-8-of-12.sg-col-12-of-16 > div > span.rush-component.s-latency-cf-section > div.s-main-slot.s-result-list.s-search-results.sg-row > div:nth-child(6) > div > div > div > div > div > div > div.a-section.a-spacing-small.puis-padding-left-small.puis-padding-right-small > div.a-section.a-spacing-none.a-spacing-top-small.s-title-instructions-style > h2')
        .should('be.visible').click()
        cy.go('back')
    })
    it('Searching products and listing products',function()
    {
         //watch for women
        cy.get("#twotabsearchtextbox").type('watch for women')
        cy.get('#nav-search-bar-form > div.nav-right > div').click() 
        cy.get('#search > div.s-desktop-width-max.s-desktop-content.s-opposite-dir.sg-row > div.s-matching-dir.sg-col-16-of-20.sg-col.sg-col-8-of-12.sg-col-12-of-16 > div > span.rush-component.s-latency-cf-section > div.s-main-slot.s-result-list.s-search-results.sg-row > div:nth-child(3) > div > div > div > div > div > div > div.a-section.a-spacing-small.puis-padding-left-micro.puis-padding-right-micro > div.a-section.a-spacing-none.a-spacing-top-small.s-title-instructions-style > div.a-row.a-size-base.a-color-secondary')
        .should('be.visible')
        cy.get('#search > div.s-desktop-width-max.s-desktop-content.s-opposite-dir.sg-row > div.s-matching-dir.sg-col-16-of-20.sg-col.sg-col-8-of-12.sg-col-12-of-16 > div > span.rush-component.s-latency-cf-section > div.s-main-slot.s-result-list.s-search-results.sg-row > div:nth-child(3) > div > div > div > div > div > div > div.a-section.a-spacing-small.puis-padding-left-micro.puis-padding-right-micro > div:nth-child(2)')
        .should('be.visible')
        cy.get('#search > div.s-desktop-width-max.s-desktop-content.s-opposite-dir.sg-row > div.s-matching-dir.sg-col-16-of-20.sg-col.sg-col-8-of-12.sg-col-12-of-16 > div > span.rush-component.s-latency-cf-section > div.s-main-slot.s-result-list.s-search-results.sg-row > div:nth-child(3) > div > div > div > div > div > div > div.a-section.a-spacing-small.puis-padding-left-micro.puis-padding-right-micro > div.a-section.a-spacing-none.a-spacing-top-small.s-price-instructions-style')
        .should('be.visible')
        cy.contains(' Get it by tomorrow, December 3')
        cy.get('#search > div.s-desktop-width-max.s-desktop-content.s-opposite-dir.sg-row > div.s-matching-dir.sg-col-16-of-20.sg-col.sg-col-8-of-12.sg-col-12-of-16 > div > span.rush-component.s-latency-cf-section > div.s-main-slot.s-result-list.s-search-results.sg-row > div:nth-child(3) > div > div > div > div > div > div > div.a-section.a-spacing-small.puis-padding-left-micro.puis-padding-right-micro > div.a-section.a-spacing-none.a-spacing-top-small.s-title-instructions-style > h2 > a')
        .should('be.visible')
    })
    })