describe('Hooks', ()=>{

    before(()=>{
       cy.log('Before all it blocks')
    })
    after(()=>{
        cy.log('after all it blocks')
    })
    beforeEach(()=>{
        cy.visit("https://adactinhotelapp.com/index.php");
        cy.get("#username").type("Lashu")
        cy.get("#password").type("lashu@123")
        cy.get("#login").click()
    })
    afterEach(()=>{
        cy.log('after each it block');
    })
    
    
    
    it('Select Location',()=>{
        cy.get("#location").select('London')
    })
     it('Select Hotel',()=>{
        cy.get("#hotels").select('Hotel Hervey')
     })
    it('Enter date',()=>{
        cy.get("#datepick_in").type("09/08/2020")
        cy.get("#datepick_out").type("12/06/2020")
    })
    
    
    
    })
