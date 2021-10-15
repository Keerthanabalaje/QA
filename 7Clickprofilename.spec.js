/// <reference types = "cypress"/>

let username =Cypress.env('username')
let password= Cypress.env('password')

before(() => {
    cy.visit('poc/s/')     
    cy.wait(400)
    cy.contains('Login').click()
    cy.url().should('include', 'login/')
    cy.get('.communityLogo').should('be.visible')
    cy.get('[placeholder="Username"]').type(username)
    cy.get('[placeholder="Password"]').type(password)
    cy.contains('Log in').click()
})


describe('Click profile name', ()=> {
    beforeEach(() => {
        cy.wait(400)
        cy.get('.profileName').click()
    })
    it('hit Home', () => {
        cy.contains('Home').click()
    })
    it('My Profile', () => {
        cy.contains('My Profile').click()
    })
    it('My Settings', () => {
        cy.contains('My Settings').click()
    })
    it('My Account', () => {
        cy.contains('My Account').click()
    })
    it('Contact Support', () => {
        cy.contains('Contact Support').click()
    })
    it('My Settings', () => {
        cy.contains('Logout').click()
    })
})