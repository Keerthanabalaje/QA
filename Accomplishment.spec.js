/// <reference types ="cypress" />
beforeEach(() => {
    cy.visit('/accomplishments')
})
describe('to work in accomplishment', () => {
    it('assesrt', () => {
        cy.get('h2').contains('Accomplishment')
    })
    it('complete work in accomplishment', () => {
        cy.get('.Accomplishment-input').type('Keerthana')
        cy.get('.Accomplishment-textarea').type('Want to get 1lakh salary per month, get favourite car veetuku kiger enaku duster. Kerala tour in our car meanwhile daddy and myself change driving')
        cy.get('[type="checkbox"]').click()
        cy.get('.Accomplishment-btn').click()
        cy.get('h1').contains('This Accomplisment was Successfully Submitted').should('be.visible')
    })
    it('validation in incomplete task no checkbox', () =>{
        cy.get('.Accomplishment-input').type('Keerthana')
        cy.get('.Accomplishment-textarea').type('Want to get 1lakh salary per month, get favourite car veetuku kiger enaku duster. Kerala tour in our car meanwhile daddy and myself change driving')
        cy.get('.Accomplishment-btn').click()
        cy.contains('Complete the items above to continue').should('be.visible')
    })
    it('validation in incomplete task no Accomplishment', () => {
        cy.get('.Accomplishment-textarea').type('Want to get 1lakh salary per month, get favourite car veetuku kiger enaku duster. Kerala tour in our car meanwhile daddy and myself change driving')
        cy.get('[type="checkbox"]').click()
        cy.get('.Accomplishment-btn').click()
        cy.contains('Complete the items above to continue').should('be.visible')
    })
    it('go back', () => {
        cy.get('.Accomplishment-input').type('Keerthana')
        cy.get('.Accomplishment-textarea').type('Want to get 1lakh salary per month, get favourite car veetuku kiger enaku duster. Kerala tour in our car meanwhile daddy and myself change driving')
        cy.get('[type="checkbox"]').click()
        cy.get('.Accomplishment-btn').click()
        cy.get('h1').contains('This Accomplisment was Successfully Submitted').should('be.visible')
        cy.get('.Accomplishment-btn').click()
        cy.get('.Accomplishment-input').should('be.empty')
        cy.get('.Accomplishment-textarea').should('have.value', '')
        cy.get('[type="checkbox"]').should('not.be.checked')

    })
})