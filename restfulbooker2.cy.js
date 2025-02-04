Cypress.on('uncaught:exception', (err, runnable) =>
    {
       return false
   });
   describe('RestFul Booking Site API Testing', ()=> 
   {
       it('Update booking POST?PUT API test', function()
        {
       //POST METHOD
         cy.request({
            method : 'POST' ,
            url : 'https://restful-booker.herokuapp.com/booking',
         headers : {
           'authorization' : "Basic YWRtaW46cGFzc3dvcmQxMjM="
       },
       body : {
           "firstname" : "Sow",
           "lastname" : "muthu",
           "totalprice" : 456,
           "depositpaid" : true,
           "bookingdates" : {
           "checkin" : "2022-08-05",
           "checkout" : "2022-08-06"
       },
           "additionalneeds" : "lunch"
       }
       })
       .then(function(response){
              expect(response.status).to.eq(200)
              expect(response.body.booking.firstname).equal("Sow")
              expect(response.body.booking.lastname).equal("muthu")
              expect(response.body.booking.totalprice).equal(456)
              expect(response.body.booking.depositpaid).equal(true)
              expect(response.body.booking.bookingdates.checkin).equal("2022-08-05")
              expect(response.body.booking.bookingdates.checkout).equal("2022-08-06")
              expect(response.body.booking.additionalneeds).equal("lunch")
   })
   .then((response) =>{
       const loginID = response.body.bookingid
       cy.log("User ID is : " + loginID)
       // Using PUT Method API test
          cy.request({
             method : 'PUT',
             url : 'https://restful-booker.herokuapp.com/booking/'+ loginID,
            // failOnStatusCode: false,
          headers : 
          {
            'authorization' : "Basic YWRtaW46cGFzc3dvcmQxMjM="
       },
       body : {
            "firstname" : "sowbarnya",
            "lastname" : "muthusamy",
            "totalprice" : 500,
            "depositpaid" : true,
            "bookingdates" : {
            "checkin" : "2021-12-31",
            "checkout" : "2022-12-31"
       },
           "additionalneeds" : "breakfast"
       }
    })
    .then((response)=>{
           expect(response.status).to.eq(200)
           expect(response.body.firstname).equal("sowbarnya")
           expect(response.body.lastname).equal("muthusamy")
           expect(response.body.totalprice).equal(500)
           expect(response.body.depositpaid).equal(true)
           expect(response.body.bookingdates.checkin).equal("2021-12-31")
           expect(response.body.bookingdates.checkout).equal("2022-12-31")
           expect(response.body.additionalneeds).equal("breakfast")
   })
   })
   })
   //POST/PATCH
   it('PartialUpdate Booking-POST/PATCH API test',function()
   {
     let user = {
         "firstname": "Nithi",
         "lastname": "Shree",
         "totalprice": 676,
         "depositpaid": true,
         "bookingdates":
          {
         "checkin": "2022-12-13",
         "checkout": "2022-12-14"
   },
         "additionalneeds": "Breakfast"
   }
       cy.request('POST', 'https://restful-booker.herokuapp.com/booking', user).then((response) => 
       {
          expect(response.status).equal(200)
          expect(response.body.booking.firstname).equal(user.firstname)
          expect(response.body.booking.lastname).equal(user.lastname)
          expect(response.body.booking.totalprice).equal(user.totalprice)
          expect(response.body.booking.depositpaid).equal(true)
          expect(response.body.booking.bookingdates.checkin).equal(user.bookingdates.checkin)
          expect(response.body.booking.bookingdates.checkout).equal(user.bookingdates.checkout)
          expect(response.body.booking.additionalneeds).equal(user.additionalneeds)
   })
   .then((response)=>{
         const LoginId = response.body.bookingid;
         cy.log('User Id is:' + LoginId);
         //PATCH METHOD
       cy.request({
           method: 'PATCH',
           url: 'https://restful-booker.herokuapp.com/booking/'+LoginId,
          failOnStatusCode: false,
       headers:
      {
          "authorization": " Basic YWRtaW46cGFzc3dvcmQxMjM=",
      },
      body:
      {
          "firstname" : "NITHYASHREE",
          "lastname" : "RAVIKUMAR",
          "totalprice": 676,
          "depositpaid": true,
          "bookingdates":
          {
         "checkin": "2022-12-13",
         "checkout": "2022-12-14"
   },
         "additionalneeds": "Breakfast"
   }
   })
   .then((response) => 
   {
          expect(response.status).equal(200)
          expect(response.body.firstname).equal('NITHYASHREE')
          expect(response.body.lastname).equal('RAVIKUMAR')
          expect(response.body.totalprice).equal(676)
          expect(response.body.depositpaid).equal(true)
          expect(response.body.bookingdates.checkin).equal('2022-12-13')
          expect(response.body.bookingdates.checkout).equal('2022-12-14')
          expect(response.body.additionalneeds).equal('Breakfast')
})
   })
   })
   //DElete api
   it('Delete booking API test',function()
   {
       cy.request({
          method: 'DELETE',
          url: 'https://restful-booker.herokuapp.com/booking/1 ',
          failOnStatusCode: false,
   }).then((response)=>
   {
          expect(response.status).equal(403)
   })
   })
   //Ping/GET API
   it('Health Check PING/GET API test',function()
   {
   cy.request({
       method: 'GET',
       url :'https://restful-booker.herokuapp.com/ping',
       failOnStatusCode: false
   }).then((response)=>
   {
          expect(response.status).equal(201)
})
   })
})