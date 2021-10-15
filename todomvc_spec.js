describe('TodoMVC', function () {
    beforeEach(function () {
        cy.visit('http://localhost:54328/__/#/tests/integration/1-getting-started/todomvc_spec.js/')
        
        cy.get('.new-todo')
          .type('buy some cheese {enter}')
          .type('feed the cat {enter}')
          .type('book a doctors appoinment {enter}')
    })
    it.only('hides "Clear Completed" with nothing checked', function (){
        cy.get('.todo-list li').eq(1).find('.toggle').check()
        cy.get('.clear-completed').should('be.visible').click()
        cy.get('.clear-completed').should('not.exist')
    })

})