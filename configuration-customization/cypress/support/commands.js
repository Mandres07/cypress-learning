// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('submitForm', () => { // -> Custom command that could be used on any test with cy.submitForm()
    cy.get('form button[type="submit"]').click();
});

Cypress.Commands.addQuery('getById', (id) => { // -> Custom query needs to return a function that return the actual cy selector prepared first with cy.now()
    const getFn = cy.now('get', `[data-cy="${id}"`); // -> first param is the cy.function to be called and the second param is the param of that first function to be called
    return () => {
        return getFn();
    };
});