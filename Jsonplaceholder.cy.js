Cypress.on('uncaught:exception', (err, runnable) =>
    {
       return false
   });
   describe('JSON place holder API test',function()
   {
       it('Validate POST API test',function()
       {
           //POST create //under resources
           //posts topic
           let user=
           {
               "userId": 1,
               "id": 101,
               "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
               "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
           }
           cy.request('POST', 'https://jsonplaceholder.typicode.com/posts', user).then((response)=>
           {
               expect(response.status).equal(201)
               expect(response.body.userId).equal(user.userId)
               expect(response.body.id).equal(user.id)
               expect(response.body.title).equal(user.title)
               expect(response.body.body).equal(user.body)
           })
       })
       it('DELETE API in todos',function()
       {
           //Todos topic
           //under resources
           //Delete API
           cy.request('DELETE', 'https://jsonplaceholder.typicode.com/todos/9').then((response)=>
           {
               expect(response.status).equal(200)
           })
       })
   it( 'GET API test in Photos',function()
       {
           //under resources
           //Photos Topic
           //Get APi
           cy.request('GEt', 'https://jsonplaceholder.typicode.com/photos/2').then((response)=>
             {
               expect(response.status).equal(200)
               expect(response.body.albumId).equal(1)
               expect(response.body.title).equal("reprehenderit est deserunt velit ipsam")
               expect(response.body.url).equal("https://via.placeholder.com/600/771796")
               expect(response.body.thumbnailUrl).equal("https://via.placeholder.com/150/771796")
           })
        })
       //UNDER ROUTES topic
       it('GET API test',function()
       {
           //GET api
           cy.request('GET', 'https://jsonplaceholder.typicode.com/posts').then((response)=>
           {
               expect(response.status).equal(200)
               expect(response.body[0].id).equal(1)
               expect(response.body[0].title).equal("sunt aut facere repellat provident occaecati excepturi optio reprehenderit")
               expect(response.body[0].body).equal("quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto")
               expect(response.body[2].userId).equal(1)
               expect(response.body[2].id).equal(3)
               expect(response.body[2].title).equal("ea molestias quasi exercitationem repellat qui ipsa sit aut")
               expect(response.body[2].body).equal("et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut")
               expect(response.body[3].userId).equal(1)
               expect(response.body[3].id).equal(4)
               expect(response.body[3].title).equal("eum et est occaecati")
               expect(response.body[3].body).equal("ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit")
           })
       })
       it("GET ID SINGLE API test",function()
       {
           //GEt single
           cy.request('GET', 'https://jsonplaceholder.typicode.com/posts/1').then((response)=>
           {
               expect(response.status).equal(200)
               expect(response.body.userId).equal(1)
               expect(response.body.id).equal(1)
               expect(response.body.title).equal("sunt aut facere repellat provident occaecati excepturi optio reprehenderit")
               expect(response.body.body).equal("quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto")
           })
       })
   it('GET API test comments',function()
       {
           //GET test under comments
           cy.request('GET', 'https://jsonplaceholder.typicode.com/posts/1/comments').then((response)=>
           {
               expect(response.status).equal(200)
               expect(response.body[0].id).equal(1)
               expect(response.body[0].name).equal("id labore ex et quam laborum")
               expect(response.body[0].email).equal("Eliseo@gardner.biz")
               expect(response.body[0].body).equal("laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium")
               expect(response.body[4].id).equal(5)
               expect(response.body[4].name).equal("vero eaque aliquid doloribus et culpa")
               expect(response.body[4].email).equal("Hayden@althea.biz")
               expect(response.body[4].body).equal("harum non quasi et ratione\ntempore iure ex voluptates in ratione\nharum architecto fugit inventore cupiditate\nvoluptates magni quo et")
           })
       })
       it('GET API test comments post id',function()
       {
           //GET test under comments post id
           cy.request('GET', 'https://jsonplaceholder.typicode.com/comments?postId=1').then((response)=>
           {
               expect(response.status).equal(200)
               expect(response.body[0].id).equal(1)
               expect(response.body[0].name).equal("id labore ex et quam laborum")
               expect(response.body[0].email).equal("Eliseo@gardner.biz")
               expect(response.body[0].body).equal("laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium")
             })
       })
       it("POST API test",function()
       {
           //post api under routes
           let user1=
           {
               "userId": 1,
               "id": 101,
               "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
               "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
           }
           cy.request('POST', 'https://jsonplaceholder.typicode.com/posts', user1).then((response)=>
           {
               expect(response.status).equal(201)
               expect(response.body.userId).equal(user1.userId)
               expect(response.body.id).equal(user1.id)
               expect(response.body.title).equal(user1.title)
               expect(response.body.body).equal(user1.body)
           })
       })
       it('PUT Api test', function()
       {
           cy.request({
             method: 'PUT',
             url: 'https://jsonplaceholder.typicode.com/posts/1',
             failOnStatusCode: false,
           body:
           {
              "userId": 1,
              "id": 1,
              "title":  "SOWBARNYA", 
              "body": "Working in the QAON cloud" //Update
           }
           })
           .then((response) => 
           {
               expect(response.status).equal(200)
               expect(response.body.userId).equal(1)
               expect(response.body.id).equal(1)
               expect(response.body.title).equal('SOWBARNYA')
               expect(response.body.body).equal("Working in the QAON cloud")
           })
           })
       it('PATCH Api', function()
        {
            cy.request({
              method: 'PATCH',
              url: 'https://jsonplaceholder.typicode.com/posts/1',
              failOnStatusCode: false,
           body:
           {
              "userId": 1,
              "id": 1,
              "title":  "SOWBARNYA", 
              "body": "Working in the QAON cloud as software testing" 
              //modified
           }
           
       })
       .then((response) => 
       {
              expect(response.status).equal(200)
              expect(response.body.userId).equal(1)
              expect(response.body.id).equal(1)
              expect(response.body.title).equal('SOWBARNYA')
              expect(response.body.body).equal("Working in the QAON cloud as software testing")
           })
           })
   it('DELETE api test',function()
       {
           cy.request('DELETE','https://jsonplaceholder.typicode.com/posts/101').then((response)=>
           {
               expect(response.status).equal(200)        
           })
       })
   })
   