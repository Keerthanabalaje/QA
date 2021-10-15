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
describe('Start selling', () => {
    beforeEach(() => {
        cy.get('[class="comm-navigation forceCommunityGlobalNavigation"]')
          .find('a')
          .contains('Start Selling').click({force:true})
        cy.url('include','contactsupport/')
        cy.wait(5000)
        cy.contains('Contact Customer Support').should('be.visible')
        cy.wait(5000)
        cy.get('[placeholder="Search Contacts..."]').click().type('Keerthana')
        cy.wait(5000)
    })
    it('enter new contact', () => {
        cy.contains('New Contact').should('be.visible').click().wait(5000)
        cy.get('[type="checkbox"]').check()
        cy.contains('--None--').click()
        cy.contains('Ms.').click()
        cy.get('[placeholder="First Name"]').type('Keerthana')
        cy.get('[placeholder="Last Name"]').type('Vijayabalaje')
        cy.get('[title="Save"]').contains("Save").click()

    })
    it('Validation while entering new contact', () => {
        cy.get('[class=" case-subject input"]').click({force:true}).type('core')
        cy.contains('Select an option from the picklist or remove the search term.').should('be.visible')
        cy.get('.textarea').click({force:true}).type('Description')
        cy.contains('Submit').click()
        cy.contains('Review the errors on this page.')
    })
    it('No result in contacts', () => {
        cy.contains('in Contacts').click()
        cy.wait(5000)
        cy.contains('No results for')
    })
})