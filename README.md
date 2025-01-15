# 🌲 Cypress, from Zero to the Cloud ☁️

👋 Welcome!

This is my cloned repository from the course 'Cypress, from Zero to the Cloud', where I learned about Cypress and was introduced to the world of automated testing

## Prerequisites to run the project

- Cypress - `v13.1.0`
- Git - `v2.34.1`
- Node.js `v18.15.0`
- npm `v9.5.0`

> I suggest you use the same or later LTS versions.

## Steps to install

1. Open the browser and visit the URL https://github.com/wlsf82/cypress-from-zero-to-the-cloud.

2. Fork the project's repo.

3. In your project fork, click the Code button, choose the clone via SSH option, and copy the project clone link.

4. In your command line terminal (in a folder where you store your software projects), run the command git clone [paste-the-copied-link-here].

5. After the project is cloned, access the newly cloned directory (cd cypress-from-zero-to-the-cloud/).

6. Install the dev dependencies, run `npm install`.

7. Run the command `npm install cypress@13.1.0 --save-dev` to install the cypress.

## Steps to run 

1. Run the command `npx cypress open` to open Cypress for the first time, and let it guide you through the creation of an end-to-end testing suite.

2. Set the configuration of Cypress in `cypress.config.js` as follows:
```javascript
const { defineConfig } = require('cypress')

module.exports = defineConfig({
  viewportHeight: 880,
  viewportWidth: 1280,
  e2e: {},
})
```

4. Done!

## Tests

Run `npm test` (or `npm t` for the short version) to run the tests in headless mode.

Or, run `npm run cy:open` to open the Cypress App and run the tests in interactive mode.
