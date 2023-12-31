# Cypress learning projects

## Cypress installation
- `npm install cypress`
- `npx cypress open` to open the Cypress studio tool or
- `npx cypress run` to just run the tests
- `npx cypress run --browser firefox` run the tests using firefox
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
- `cy.stub([object], '[function name]]').as('[alias]');`: stub replaces a function code to anything you want
- `cy.fixture('user-location.json');`: accesses a json file located in fixtures folder inside cypress, that contains defined dummy data
- `cy.spy(window.localStorage, 'setItem').as('storeLocation');`: set a listener to not changes function just to see if it was called
- `cy.clock();`: indicates that you are going to manipulate the time, must be called beforeEach test
- `cy.tick(2000);`: indicates to advacne 2000 ms in time
- `cy.intercept([http verb],[url]);`: intercepts http request to the provided url
- `cy.intercept('POST', '/newsletter*', { status: 201 }).as('subscribe')`: creates a response dummy data to the request and also creates an alias for the interceptor
- `cy.wait('@subscribe');`: waits for an interceptor to finish to continue
- ` cy.request([request object]).then()`: sends a request without using the UI. You can make assertions within the then method
- `cy.getCookie('[cookie name]').its('[cookie field]').should('not.be.empty');`: gets a cookie by name and then some of its fields to make assertions

## Running Cypress without Cypress Studio
using the command: `npx cypress run` you can run all cypress tests without opening the Cypress Studio