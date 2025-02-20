// have to install the cypress file upload plugin using command "npm install --save-dev cypress-file-upload" 
// Add an import commands.js "import 'cypress-file-upload';""

//Uploading a file in the web (Before uploading any file, add it to the fixtures folder)


/// <reference types="cypress"/>
describe('File Upload and Download Test', () => {
    it('File Upload', () => {
    
      cy.visit("https://davidwalsh.name/demo/multiple-file-upload.php")
      cy.get("#filesToUpload").attachFile(['Baby.png']);
      
  
  
      
      cy.wait(4000);
    })
  

    it('Mutiple file uploads', ()=>{

        cy.visit("https://davidwalsh.name/demo/multiple-file-upload.php")
        cy.get("#filesToUpload").attachFile(['Laptop.png', 'Baby.png','Butterfly.png']);
    })
     

    
});