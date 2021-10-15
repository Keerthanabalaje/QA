
let username =Cypress.env('username')
let password= Cypress.env('password')

describe('test', () => {
    beforeEach (() => {
    cy.visit('poc/s/')
})

it('complete login credintials', () => {
    openContentpage()
    cy.get('[placeholder="Username"]').type(username)
    cy.get('[placeholder="Password"]').type(password)
    cy.contains('Log in').click()
})
it('empty login credintials', () => {
    openContentpage()
    cy.get('[placeholder="Username"]').should('be.empty')
    cy.get('[placeholder="Password"]').should('be.empty')
    cy.contains('Log in').click()
    cy.get('.uiOutputRichText').contains('Enter a value in the User Name field.')
})
})
