/// <reference types = "cypress"/>
describe('Window', () => {
    beforeEach(() =>{
        cy.visit('https://katalon-demo-cura.herokuapp.com/')
    })
    it('open in mac 15', () =>{
        cy.viewport('macbook-15')
        cy.screenshot()
        cy.wait(200)
    })
    it('open in mac 13', () => {
        cy.viewport('macbook-13')
        cy.screenshot()
        cy.wait(200)
    })
})

describe('view port practise', () => {
    it('to visit the URL', () =>{
        cy.visit('https://example.cypress.io/commands/viewport')
    })
    it('cy.viewport dimension setting', () => {
        cy.get('#navbar').should('be.visible')
        cy.viewport(320, 480)
        cy.get('#navbar').should('not.be.visible')
        cy.get('.navbar-toggle').should('be.visible').click()
        cy.get('nav').find('a').should('be.visible')
        cy.viewport('macbook-15')
        cy.wait(200)
    })

})