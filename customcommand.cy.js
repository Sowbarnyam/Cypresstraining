describe('Custom Commands Demo', function(){


    it('Student Login', function(){

        cy.logiin('student','Password123')
        cy.title().should('be.equal','Logged In Successfully | Practice Test Automation') //Valid

        //Data Driven

        cy.logiin('student','Password')
        cy.title().should('not.be.equal','Logged In Successfully | Practice Test Automation') //inValid

 })

    it('Adding Student ', function(){
        cy.logiin('student','Password123')

        // Scripts to add new student
        cy.log('Adding a student..........')
    })

    
    it('Editing student', function(){

        cy.logiin('student','Password123')

        // Scripts to edit a student
        cy.log('Editing a student..........')     
    })
})


