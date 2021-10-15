///<reference types ="cypress" /> 
describe('crash course', () => {
    beforeEach(() => {
            cy.visit('https://dev-cbanc.cs198.force.com/poc/s/')
    })
    it('url working assert',() => {
        cy.url().should('eq','https://dev-cbanc.cs198.force.com/poc/s/')
    })
    it('input login credintials', () => {
        cy.contains('Login').click()
        cy.url().should('include', 'login/')
        cy.get('[placeholder="Username"]').type('owi8u4+2zljpcapuou74@sharklasers.com')
        cy.get('[placeholder="Password"]').type('Prani@98')
        cy.contains('Log in').click()
        cy.url().should('include', '')
    it('login credintials', ( ) => {
        
    })

    })
    it('Forgot password', () => {
        cy.contains('Login').click()
        cy.url().should('include', 'login/')
        cy.get('.inverseTextColor').contains('Forgot your password?').click()
        cy.url().should('include','login/ForgotPassword')
        cy.get('[style="font-size:22px"]').should('be.visible')
        cy.contains('[style="text-align: center;"]',"To reset your password, we'll need your username.")
        cy.get('[placeholder="Username"]').type('owi8u4+2zljpcapuou74@sharklasers.com')
        cy.get('.bBody').click()
        cy.contains('NOW, CHECK YOUR EMAIL').should('exist')
    })
    it.only('Forgot password validation', () => {
        cy.contains('Login').click()
        cy.url().should('include', 'login/')
        cy.get('.inverseTextColor').contains('Forgot your password?').click()
        cy.url().should('include','login/ForgotPassword')
        cy.get('[style="font-size:22px"]').should('be.visible')
        cy.contains('[style="text-align: center;"]',"To reset your password, we'll need your username.")
        cy.get('[placeholder="Username"]').should('be.empty')
        cy.get('.bBody').click()
        cy.contains('Invalid Email Address').should('exist')
    })
    it.only('not a member', () => {

    })
})