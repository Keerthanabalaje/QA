/// <reference types="cypress" />
describe('trying to-do', () => {
    
    it ('to get two default list', () => {
        cy.visit('https://example.cypress.io/todo')
        cy.get('.todo-list li').should('have.length', 2)
    })

})