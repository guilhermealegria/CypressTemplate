const { defineConfig } = require("cypress");
const { configureAllureAdapterPlugins } = require('@mmisty/cypress-allure-adapter/plugins');

module.exports = defineConfig({
  e2e: {
    env: {
      allure: 'true',
      allureCleanResults: 'true',
      allureAddVideoOnPass: 'false',
      allureLogCyCommands: 'true',
      allureIgnoreUncaughtExceptions: ''
    },
    setupNodeEvents(on, config) {
      configureAllureAdapterPlugins(on, config);
      return config;
    },
  },
});
