const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default;

module.exports = defineConfig({
 
  e2e: {
    env: {
       apiBaseUrl: 'https://raromdb-3c39614e42d4.herokuapp.com',
    },
    specPattern: 'cypress/e2e/**/*.feature',
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber())
    },
  },
});
