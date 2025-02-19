//<reference types="cypress" />

class RegistrationToday

{
visit(){

cy.visit("https://codenboxautomationlab.com/registration-form/")
}

fillFirst(value)
{
const data= cy.get("#nf-field-17")
// Variable declre
data.clear()
data.type(value)
return this // Representing the class
} // MethodCreat

fillLast(value)
{

const data= cy.get("#nf-field-18")
data.type(value)
return this

}

fillEmail(value)
{

const data=cy.get ("#nf-field-19")
data.type(value)
return this

}

fillPhone(value)
{

const data=cy.get("#nf-field-20")
data.type(value)
return this

}

fillCourse(value)
{

const data=cy.get("#nf-field-22")
data.select(value)
return this

}

fillMonth(value)
{

const data=cy.get("#nf-field-24")
data.select(value)
return this
}

fillHow(value)
{

const data= cy.get("#nf-label-class-field-23-3")
data.click(value)
return this
}

submit()
{

const button= cy.get("#nf-field-15")
button.click({force:true })
}

}

export default RegistrationToday

