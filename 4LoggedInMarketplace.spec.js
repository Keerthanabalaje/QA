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
describe('Marketplace  ', () => {
    beforeEach('url assert', () => {
        cy.get('[class="comm-navigation forceCommunityGlobalNavigation"]')
          .find('a')
          .contains('Marketplace').click({force:true})
        cy.url('eq','https://dev-cbanc.cs198.force.com/poc/s/')
    })
    it('product 1', () => {
        cy.contains('Product details').click()
        cy.wait(8000)
        cy.contains('Product1').should('be.visible')
        cy.get('.title').contains('Related').click()
        cy.wait(1000)
        cy.contains('Notes').should('be.visible')
        cy.get('.title').contains('Details').click()
    })
    it('product2', () => {
        cy.wait(400)
        cy.get('#indicator-id-1').click()
    })
    it('product 3', () => {
        cy.wait(400)
        cy.get('#indicator-id-2').click()
    })
    it('product 4', () => {
        cy.wait(400)
        cy.get('#indicator-id-3').click()
    })
    it('working on search...', () =>{
        cy.get('[class= "uiInput uiAutocomplete uiInput--default"]').type('CBANC')
        cy.wait(400)
        cy.contains('CBANC Users').click({force:true})
        cy.get('.title').contains('Related').click()
        cy.wait(5000)
        cy.contains('Notes').should('be.visible')
        cy.get('.title').contains('Details').click()
    })
})

