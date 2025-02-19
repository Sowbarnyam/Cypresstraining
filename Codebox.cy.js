import RegistrationToday from './POM/codebox.cy'

describe ('Codebox',function(){

    
    it('FormRegistraion',function(){
    
    const data =new RegistrationToday()
    data.visit()
    data.fillFirst("Sowbarnya")
    data.fillLast("kamalesh")
    data.fillEmail("sowbarnya@gmail.com")
    data.fillPhone("9876543210")
    data.fillCourse("Selenium Automation")
    data.fillMonth("October")
    data.fillHow()
    
    data.submit()
    
    })
})

  