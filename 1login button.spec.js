///<reference types ="cypress" /> 

let username =Cypress.env('username')
let password= Cypress.env('password')

beforeEach(() => {
    cy.visit('poc/s/')     
    cy.wait(400)
    cy.contains('Login').click()
    cy.url().should('include', 'login/')
    cy.get('.communityLogo').should('be.visible')
})

describe('Login work', () => {
    it('complete login credintials', () => {
        cy.get('[placeholder="Username"]').type(username)
        cy.get('[placeholder="Password"]').type(password)
        cy.contains('Log in').click()
    })
    it('empty login credintials', () => {
        cy.get('[placeholder="Username"]').should('be.empty')
        cy.get('[placeholder="Password"]').should('be.empty')
        cy.contains('Log in').click()
        cy.get('.uiOutputRichText').contains('Enter a value in the User Name field.')
    })
    it('validation without username', () => {
        cy.get('[placeholder="Username"]').should('be.empty')
        cy.get('[placeholder="Password"]').type(password)
        cy.contains('Log in').click()
        cy.get('.uiOutputRichText').contains('Enter a value in the User Name field.')
    })
    it('validation without password', () => {
        cy.get('[placeholder="Username"]').type(username)
        cy.get('[placeholder="Password"]').should('be.empty')
        cy.contains('Log in').click()
        cy.get('.uiOutputRichText').contains('Enter a value in the Password field.')
    })
})

describe('forget password work', () => {
    beforeEach(() => {
        cy.get('.inverseTextColor').contains('Forgot your password?').click()
        cy.url().should('include','login/ForgotPassword')
        cy.get('[style="font-size:22px"]').should('be.visible')
        cy.contains('[style="text-align: center;"]',"To reset your password, we'll need your username.")
    })
    it('Successful Forgot password creation ', () => {
        cy.get('[placeholder="Username"]').type(username)
        cy.get('.bBody').click()
        cy.contains('NOW, CHECK YOUR EMAIL').should('exist')
    })
    it('validation without username', () => {
        cy.get('[placeholder="Username"]').should('be.empty')
        cy.get('.bBody').click()
        cy.contains('Invalid Email Address').should('exist')
    })
})

describe(' not a member work', () => {
    beforeEach( () => {
        cy.contains('Not a member?').click()
        cy.get('.communityLogo').should('be.visible')
        cy.contains('Join the community to receive personalized information and customer support.')
        cy.get('[placeholder="First Name"]')
        cy.get('[placeholder="Last Name"]')
        cy.get('[placeholder="Email"]')
    })
    it('giving complete input', () => {
        cy.get('[placeholder="First Name"]').type('Keerthana')
        cy.get('[placeholder="Last Name"]').type('Vijayabalaje')
        cy.get('[placeholder="Email"]').type('keerthanabalaje2000@gmail.com')   
        cy.contains('Sign Up').click()
        cy.contains('Your request cannot be processed at this time. The site administrator has been alerted.').should('be.visible')
    })
    it('validation empty input' , () => {
        cy.contains('Sign Up').click()
        cy.contains('Last name is required.').should('be.visible')
    })
    it('validation with only firstname' , () => {
        cy.get('[placeholder="First Name"]').type('Keerthana')
        cy.contains('Sign Up').click()
        cy.contains('Last name is required.').should('be.visible')
    })
    it('validation with only lastnmae', () => {
        cy.get('[placeholder="Last Name"]').type('Keerthana')
        cy.contains('Sign Up').click()
        cy.contains('Email address is required.').should('be.visible')
    })
    it('validation with only email', () => {
        cy.get('[placeholder="Email"]').type('keerthanabalaje2000@gmail.com')  
        cy.contains('Sign Up').click()
        cy.contains('Last name is required.').should('be.visible')
    })
    it('validation with no First Name', () => {
        cy.get('[placeholder="Last Name"]').type('Vijayabalaje')
        cy.get('[placeholder="Email"]').type('keerthanabalaje2000@gmail.com')
        cy.contains('Sign Up').click()
        cy.contains('Your request cannot be processed at this time. The site administrator has been alerted').should('be.visible')
    })
    it('validation with no Last Name', () => {
        cy.get('[placeholder="First Name"]').type('Keerthana')
        cy.get('[placeholder="Email"]').type('keerthanabalaje2000@gmail.com')
        cy.contains('Sign Up').click()
        cy.contains('Last name is required.').should('be.visible')
    })
    it('validation with no email', () => {
        cy.get('[placeholder="First Name"]').type('Keerthana')
        cy.get('[placeholder="Last Name"]').type('Vijayabalaje')
        cy.contains('Sign Up').click()
        cy.contains('Email address is required.').should('be.visible')
    })
    it('have a account', () => {
        cy.contains('Already have an account?').click()
        cy.url().should('eq', 'https://dev-cbanc.cs198.force.com/poc/s/login/')
  })
})