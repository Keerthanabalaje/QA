describe('cura application', () =>{
    it('to visit the URL', () =>{
        cy.visit('https://katalon-demo-cura.herokuapp.com/')
    })

    it('to enter', () =>{
        cy.get('#btn-make-appointment').click()
    })

    it('to login', () => {
        cy.get('#txt-username').type('John Doe')
        cy.get('#txt-password').type('ThisIsNotAPassword')
        cy.get('#btn-login').click()
    })

    it('to select options', () =>{
        cy.get('#combo_facility').select('Seoul CURA Healthcare Center')
    })

    it('it click apply check-box', () =>{
        cy.get('.checkbox-inline'). click()
    })

    it('to nder gp check-box options', () =>{
        cy.get('#radio_program_medicaid').click()
    })

    it('to write date', () => {
        cy.get('#txt_visit_date'). type('13/07/2021')
    })

    it('to write text', () => {
        cy.get('#txt_comment'). click({force:true})
        cy.get('#txt_comment').click()
        cy.get('#txt_comment').type('This is keerthana. she is charming beauty')
    })

    it('finall', () => {
        cy.get('#btn-book-appointment'). click()
    })

    it('finall veryfication', () =>{
        cy.get('h2'). contains('Appointment Confirmation')
        cy.get('#facility'). contains('Seoul CURA Healthcare Center')
        cy.get('#comment').contains('This is keerthana. she is charming beauty')
        cy.get('col-xs-12').find('a').click()
        cy.contains('CURA Healthcare Service')
    })
})