/// <reference types="Cypress" />

describe('Tasks Management', () => {
    it('should open and close the new task modal', () => {
        cy.visit('http://localhost:5173/');

        cy.contains('Add Task').click();
        cy.get('.backdrop').should('exist');
        cy.get('dialog.modal').should('exist');
        cy.get('.backdrop').click({ force: true });
        cy.get('.backdrop').should('not.exist');
        cy.get('dialog.modal').should('not.exist');

        cy.contains('Add Task').click();
        cy.get('.backdrop').should('exist');
        cy.get('dialog.modal').should('exist');
        cy.contains('Cancel').click();
        cy.get('.backdrop').should('not.exist');
        cy.get('dialog.modal').should('not.exist');
    });

    it('should create a new task', () => {
        cy.visit('http://localhost:5173/');
        cy.contains('Add Task').click();
        cy.get('#title').type('My first task');
        cy.get('#summary').type('The task description is longer');
        cy.get('.modal').contains('Add Task').click();
        cy.get('ul.task-list').find('li').should('have.length', 1);
        cy.get('li.task').should('have.length', 1);
        cy.get('li.task h2').contains('My first task');
        cy.get('li.task p').contains('The task description is longer');
    });

    it('should validate user input', () => {
        cy.visit('http://localhost:5173/');
        cy.contains('Add Task').click();
        cy.get('.modal').contains('Add Task').click();
        cy.contains('Please provide values');
    });

    it('should filter tasks', () => {
        cy.visit('http://localhost:5173/');
        cy.contains('Add Task').click();
        cy.get('#title').type('My first task');
        cy.get('#summary').type('The task description');
        cy.get('#category').select('urgent');    
        cy.get('.modal').contains('Add Task').click();
        cy.get('li.task').should('have.length', 1);
        cy.get('#filter').select('moderate');
        cy.get('li.task').should('have.length', 0);
        cy.get('#filter').select('urgent');
        cy.get('li.task').should('have.length', 1);
        cy.get('#filter').select('all');
        cy.get('li.task').should('have.length', 1);
    });

    it('shoudl add multiple tasks', () => {
        cy.visit('http://localhost:5173/');

        cy.contains('Add Task').click();
        cy.get('#title').type('Task 1');
        cy.get('#summary').type('First task');
        cy.get('#category').select('urgent'); 
        cy.get('.modal').contains('Add Task').click();
        cy.get('li.task').should('have.length', 1);

        cy.contains('Add Task').click();
        cy.get('#title').type('Task 2');
        cy.get('#summary').type('Second task');
        cy.get('.modal').contains('Add Task').click();
        cy.get('li.task').should('have.length', 2);

        cy.get('.task').eq(0).contains('First task');  // -> first()
        cy.get('.task').eq(1).contains('Task 2'); // -> last()
    });
});