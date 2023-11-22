/// <reference types="Cypress" />

describe('Contact Form', () => {
    it('should submit the form', () => {
        cy.visit('http://localhost:5173/about');
        cy.get('[data-cy="contact-input-message"]').type('This is the message');
        cy.get('[data-cy="contact-input-name"]').type('Mario Morales');
        cy.get('[data-cy="contact-input-email"]').type('test@example.com');
        cy.get('[data-cy="contact-btn-submit"]').contains('Send Message');
        cy.get('[data-cy="contact-btn-submit"]').should('not.have.attr', 'disabled');
        cy.get('[data-cy="contact-btn-submit"]').click({ force: true });
        cy.get('[data-cy="contact-btn-submit"]').contains('Sending...');
        cy.get('[data-cy="contact-btn-submit"]').should('have.attr', 'disabled');
    });
    it('should submit the form - code alternative', () => {
        cy.visit('http://localhost:5173/about');
        cy.get('[data-cy="contact-input-message"]').type('This is the message');
        cy.get('[data-cy="contact-input-name"]').type('Mario Morales');
        cy.get('[data-cy="contact-input-email"]').type('test@example.com');
        cy.get('[data-cy="contact-btn-submit"]')
            .contains('Send Message')
            .should('not.have.attr', 'disabled');
        const btn = cy.get('[data-cy="contact-btn-submit"]');
        btn.click({ force: true });
        btn.contains('Sending...');
        btn.should('have.attr', 'disabled');
    });
    it('should submit the form - code alternative with aliases', () => {
        cy.visit('http://localhost:5173/about');
        cy.get('[data-cy="contact-input-message"]').type('This is the message');
        cy.get('[data-cy="contact-input-name"]').type('Mario Morales');
        cy.get('[data-cy="contact-input-email"]').type('test@example.com');
        cy.get('[data-cy="contact-btn-submit"]')
            .contains('Send Message')
            .should('not.have.attr', 'disabled');
        cy.get('[data-cy="contact-btn-submit"]').as('submitBtn')
        cy.get('@submitBtn').click({ force: true });
        cy.get('@submitBtn').contains('Sending...');
        cy.get('@submitBtn').should('have.attr', 'disabled');
    });
    it('should submit the form - code alternative with then', () => {
        cy.visit('http://localhost:5173/about');
        cy.get('[data-cy="contact-input-message"]').type('This is the message');
        cy.get('[data-cy="contact-input-name"]').type('Mario Morales');
        cy.get('[data-cy="contact-input-email"]').type('test@example.com');
        cy.get('[data-cy="contact-btn-submit"]').then((element) => {
            // element.addClass('blocked');
            // element.attr('disabled');
            // element.text();
            // element is a wrapper of the actual html elements of the get
            expect(element.attr('disabled')).to.be.undefined;
            expect(element.text()).to.eq('Send Message');
        });
        // cy.get('[data-cy="contact-btn-submit"]')
        //     .contains('Send Message')
        //     .should('not.have.attr', 'disabled');

        cy.get('[data-cy="contact-btn-submit"]').as('submitBtn')
        cy.get('@submitBtn').click({ force: true });
        cy.get('@submitBtn').contains('Sending...');
        cy.get('@submitBtn').should('have.attr', 'disabled');
    });
    it('should submit the form by hittinh enter', () => {
        cy.visit('http://localhost:5173/about');
        cy.get('[data-cy="contact-input-message"]').type('This is the message');
        cy.get('[data-cy="contact-input-name"]').type('Mario Morales');
        cy.get('[data-cy="contact-btn-submit"]').then((element) => {
            // element.addClass('blocked');
            // element.attr('disabled');
            // element.text();
            // element is a wrapper of the actual html elements of the get
            expect(element.attr('disabled')).to.be.undefined;
            expect(element.text()).to.eq('Send Message');
        });
        cy.screenshot();
        cy.get('[data-cy="contact-input-email"]').type('test@example.com{enter}'); // hitting enter after typing the email
        cy.get('[data-cy="contact-btn-submit"]').as('submitBtn');
        cy.get('@submitBtn').click({ force: true });
        cy.get('@submitBtn').contains('Sending...');
        cy.get('@submitBtn').should('have.attr', 'disabled');
    });

    it('should validate the form input', () => {
        cy.visit('http://localhost:5173/about');
        cy.get('[data-cy="contact-btn-submit"]').click();
        cy.get('[data-cy="contact-btn-submit"]').then(el => {
            expect(el).to.not.have.attr('disabled');
            expect(el.text()).to.not.equal('Sending...');
        });
        cy.get('[data-cy="contact-btn-submit"]').contains('Send Message');
        cy.get('[data-cy="contact-input-message"]').as('msgInput');
        cy.get('@msgInput').focus().blur();
        cy.get('@msgInput')
            .parent()
            .should('have.attr', 'class') // Cypress passes the value of the attr class to the next assertion
            .and('match', /invalid/);

        cy.get('[data-cy="contact-input-name"]').as('nameInput')
        cy.get('@nameInput').focus().blur();
        cy.get('@nameInput')
            .parent()
            .should('have.attr', 'class')
            .and('match', /invalid/);

        cy.get('[data-cy="contact-input-email"]').as('emailInput');
        cy.get('@emailInput').focus().blur();
        cy.get('@emailInput')
            .parent()
            .should(el => {
                expect(el.attr('class')).not.to.be.undefined;
                expect(el.attr('class')).to.contains('invalid');
            });
    });
});