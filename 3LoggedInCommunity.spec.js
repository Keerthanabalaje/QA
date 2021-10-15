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

describe('community', () => {
    beforeEach( ()=> {
        cy.get('[class="comm-navigation forceCommunityGlobalNavigation"]')
          .find('a')
          .contains('community').click({force:true})
    })
    it('share an update, like and comment', () => {
        cy.wait(5000)
        cy.contains('Nothing here yet?')
        cy.get('[title="Share an update..."]').click()
        cy.get('[data-placeholder="Share an update..."]').type('this is CBANC community')
        cy.get('[title="Click, or press Ctrl+Enter"]').click()
        cy.contains('Like').click()
        cy.contains('Liked').should('be.visible').click()
        cy.contains(' Comment').click()
        cy.get('[data-placeholder="Write a comment..."]').type('Entered the comment')
        cy.get('[title="Click, or press Ctrl+Enter"]').contains('Comment').click()
    })
})
describe('Custom Test', () => {
    it('click CustomTest',()=> {
    cy.get('[class="comm-navigation forceCommunityGlobalNavigation"]')
          .find('a')
          .contains('Custom Test').click({force:true})
    cy.url('include','customcomponents/')
    })
})