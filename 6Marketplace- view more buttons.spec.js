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
describe('view more button',() => {
    beforeEach('url assert', () => {
        cy.get('[class="comm-navigation forceCommunityGlobalNavigation"]')
          .find('a')
          .contains('Marketplace').click({force:true})
        cy.url('eq','https://dev-cbanc.cs198.force.com/poc/s/')
    })
    it('Browse all- button', () => {
        cy.wait(400)
        cy.get('button.viewMoreButton').contains('Browse all').click({force:true})
        cy.wait(1000)
        cy.contains('Premium 3 - Tier 2').click()
        cy.wait(8000)
        cy.contains('Premium 3 - Tier 2').should('be.visible')
        cy.get('.title').contains('Related').click()
        cy.wait(400)
        cy.contains('Notes').should('be.visible')
        cy.get('.title').contains('Details').click()
    })
    it('seemore - button', () => {
        cy.get('button.viewMoreButton').contains('See More').click({force:true})
    }) 
})