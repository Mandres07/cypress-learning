/// <reference types="Cypress" />

describe('Tasks page', () => {
  it('should render the main image', () => {
    cy.visit('http://localhost:5173/');
    // cy.get('.main-header img'); -> also works
    cy.get('.main-header').find('img');
  });

  it('should display te page title', () => {
    cy.visit('http://localhost:5173/');
    cy.get('h1').should('have.length', 1);
    cy.get('h1').contains('My Cypress Course Tasks');
    // cy.contains('My Cypress Course Tasks'); this checks if te text exists in the entire page
  });
});