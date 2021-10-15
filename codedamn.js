// full crash course = https://www.youtube.com/watch?v=OIAzwr-_jhY&t=3168s
/// <reference types = "cypress"/>

const { urlencoded } = require("body-parser")

describe('crash course', () => {
    beforeEach(() => {
        cy.viewport(1280, 720)
        cy.visit('https://codedamn.com/')
    })
    it('using h1 or simple contains', () => {
        cy.contains('Be industry-ready fullstack coder. 10x faster and 100x cheaper.')
        cy.get('h1').contains('Be industry-ready fullstack coder. 10x faster and 100x cheaper.')
    })
    it ('using get', () => {
        cy.get('div#root').should('exist')
        cy.get('#root').should('exist')
        cy.get('div [id = root]')
    })
    it('sign in', () => {
        cy.contains('Sign In'). click()
        cy.get('#email').type('isodev')
        cy.get('#password').type('isodev')
        cy.get('[data-testid=login]').click()
        cy.contains('Unable to authorize. Please check username/password combination').should('be.visible')
    })
})