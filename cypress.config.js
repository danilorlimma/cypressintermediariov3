const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost',
    experimentalRunAllSpecs:true
    },
    fixturesFolder:false,
    video: false,
  },
);
