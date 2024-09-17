import { defineConfig } from "cypress";

export default defineConfig({
  env: {
    Email:"lushojsjs@gmail.com",
    Password: "Bolivar2004",
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
