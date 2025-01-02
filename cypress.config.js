
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
const { defineConfig } = require("cypress");
//const {downloadFile} = require('cypress-downloadfile/lib/addPlugin')
const xlsx = require('node-xlsx').default;
const fs = require('fs');
const path = require('path');
//const mysql = require("mysql")


module.exports = (on, config) => {
  on('task', {
    parseXlsx({ filePath }) {
      return new promise((resolve, reject) => {
        try {
          const jsonData = xlsx.parse(fs.readFileSync(filePath));
          resolve(jsonData);
        } catch (e) {
          reject(e);
        }
      });
    }
  });
}
const readXlsx = require('./cypress/Excel/read-xlsx')

module.exports = (on, config) => {


  // <- add this line

  on('task', {
    'readXlsx': readXlsx.read
  })
  
}


module.exports = defineConfig({
  e2e: {
    projectId: 'u67qad',
    "chromeWebSecurity": false,
    setupNodeEvents(on, config) {
      on('task', {
        'readXlsx': readXlsx.read
      })
      on('task', {

        log(message) {

          console.log(message)



          return null

        },

      })

      //  on('task', {downloadFile})

      // implement node event listeners here
    },
  },
});
/*const { defineConfig } = require("cypress");
 
//const xlsx = require("xlsx");
const syncSql = require("sync-sql");
module.exports = defineConfig({
  e2e: {
    defaultCommandTimeout : 600000,
        watchForFileChanges : false,
        setupNodeEvents(on, config) {
          // implement node event listeners here
        on('task',
        { queryDb: query => { return queryTestDb(query, config) }, }); //For running sql query
  } 
},
   "env": {
    "db": {
      "host": "sql6.freemysqlhosting.net",
      "user": "sql6581949",
      "password": "YM2hVzhjfw",
      "database": "sql6581949",
      "Port ": 3306
    }
  }
 
});
 
//For connecting to SQL Server
const mysql = require('mysql')
function queryTestDb(query, config) {
  // creates a new mysql connection using credentials from cypress.json env's
  const connection = mysql.createConnection(config.env.db)
  // start connection to db
  connection.connect()
  // exec query + disconnect to db as a Promise
  return new Promise((resolve, reject) => {
    connection.query(query, (error, results) => {
      if (error) reject(error)
      else {
        connection.end()
        return resolve(results)
      }
    })
  })
}*/
