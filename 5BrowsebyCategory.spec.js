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
    cy.wait(500)
})
describe('BrowsebyCategory', () => {
    beforeEach('url assert', () => {
        cy.get('[class="comm-navigation forceCommunityGlobalNavigation"]')
          .find('a')
          .contains('Marketplace').click({force:true})
        cy.url('eq','https://dev-cbanc.cs198.force.com/poc/s/')
    })
    it('BrowsebyCategory - CBANC Sales & Marketing ', () => {
        cy.wait(5000)
        cy.contains('CBANC Sales & Marketing').click()
        cy.wait(5000)
        cy.contains('CBANC Sales & Marketing').should('be.visible')
        cy.get('.title').contains('Related').click()
        cy.wait(5000)
        cy.contains('Notes').should('be.visible')
        cy.get('.title').contains('Details').click()
    })
    it('BrowsebyCategory - All Access Membership [NEW] ', () => {
        cy.wait(5000)
        cy.contains('All Access Membership [NEW]').click()
        cy.wait(500)
    })
})