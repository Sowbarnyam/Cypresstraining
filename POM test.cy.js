import LoginPage from "./POM/Loginpage.cy"

describe('POM TestClass', function(){
    it('Adactin app', function(){
        const login = new LoginPage  // object of the class
        login.visit()
        login.userName("lashu")
        login.passWord("lashu")
        login.loginButton()

        cy.title().should('be.equal','Adactin.com - Search Hotel')


    })
    
    
    
    
   } )
