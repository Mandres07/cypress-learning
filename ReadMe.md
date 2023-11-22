# Cypress learning projects

## Cypress installation
- `npm install cypress`
- `npx cypress open` to open the Cypress studio tool or
- `npx cypress run` to just run the tests
- selected End-to-End with chrome
- created a test file from scratch

## Cypress auto completion
- add `/// <reference types="Cypress" />` at the top of each *.cy.js test file

## Cypress functions
- `cy.visit([url])`: opens a web site and fails if the website is not 
- `cy.get()`: gets an html element by a given css selector
- `cy.find()`: gets an html element by a given css selector within the previous element(s) selected with get. 
    - Won't work directly on cy object
- `cy.get()[optional selector].contains('[test to search]')`: check if an element contains the provided text
- `cy.get()[optional selector].click('{options}')`: check if an element can be clicked and performs the click action
- `cy.get()[optional selector].should('assertion')`: check if the provided assertion is working as expected
- `cy.location('pathname').should('eq', '/about')`: check if the current location matches the provided pathname 
- `cy.go().back()`: go back to the previous page
- `cy.get('[data-cy="contact-input-email"]').focus()`: focuses on an input
- `cy.get('[data-cy="contact-input-email"]').blur()`: blur an input
- `cy.screenshot()`: take an screenshot in the place and time you want
## Running Cypress without Cypress Studio