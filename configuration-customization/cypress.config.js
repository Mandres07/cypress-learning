import { defineConfig } from "cypress";

export default defineConfig({
  // video: true,
  // videosFolder: '',
  // videoCompression: ,
  // defaultCommandTimeout: 4000, -> cy.get() timeout
  e2e: {
    baseUrl: 'http://localhost:5173', // Sets the base URL for e2e tests
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('task', {
        // Run your NodeJS code
        // edit file, run sql queries
        seedDatabase(filename) {
          console.log('Database seeded');
          console.log(filename);
          return {
            filename,
            success: true
          };
        }
      })
    },
  },
});
