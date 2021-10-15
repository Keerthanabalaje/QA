/// <reference types ="cypress" />

describe('to work on habit state', () => {
    beforeEach(() => {
        cy.visit("/habits")
    })
    it('to click add butoon pop up', () => {
        cy.contains('Add').click()
        cy.get('.modal-title').contains('Add a new habit').should('exist')
    })
    it('to eneter another add to get card', () => {
        cy.get('#habit-add-btn').click()
        cy.get("[placeholder='Habit']").type('keerthana')
        cy.get('.btn-primary').click()
        cy.get('.HabitCard__habit-container').contains('keerthana').should('be.visible')
    })
    it('toggle of image', () => {
        cy.get('#habit-add-btn').click()
        cy.get("input[placeholder='Habit']").type('keerthana')
        cy.get('.btn-primary').click()
        cy.get('.HabitCard__habit-container').click()
        cy.get('[src="/static/media/check.9e8832df.svg"]').should('exist')
    })

})