describe('E2E Quiz Test', () => {
    it('user can access the Start Quiz page',() => {
        cy.visit('http://localhost:3000/')
    });

    it('user can start the quiz, click on any of the answer options, see a new question after answering a question, and receives a final score after completing the quiz', () => {
        cy.intercept('GET', '/api/questions/random', {fixture: 'questions.json'}).as('quizQuestions')
        cy.visit('http://localhost:3000/')
        cy.get('button').should('exist').should('have.text', 'Start Quiz').click()
        cy.wait('@quizQuestions');
        cy.get('.mt-3')
            .find('.btn.btn-primary').eq(1).click();
        cy.get('.mt-3')
            .find('.btn.btn-primary').eq(2).click();
        cy.get('.mt-3')
            .find('.btn.btn-primary').eq(2).click();
        cy.get('.mt-3')
            .find('.btn.btn-primary').eq(2).click();
        cy.get('.mt-3')
            .find('.btn.btn-primary').eq(1).click();
        cy.get('.mt-3')
            .find('.btn.btn-primary').eq(0).click();
        cy.get('.mt-3')
            .find('.btn.btn-primary').eq(0).click();
        cy.get('.mt-3')
            .find('.btn.btn-primary').eq(1).click();
        cy.get('.mt-3')
            .find('.btn.btn-primary').eq(1).click();
        cy.get('.mt-3')
            .find('.btn.btn-primary').eq(1).click();
 cy.pause();
        cy.get('.card.p-4.text-center').should('exist')
            .find('h2').should('exist').and('include.text', 'Quiz Completed');

        cy.get('.card.p-4.text-center')
            .find('.alert.alert-success').should('exist').and('include.text', 'Your score:');

        cy.get('.card.p-4.text-center').should('exist')
            .find('button').should('exist').and('include.text', 'Take New Quiz').click();

        cy.get('.card.p-4').should('exist')
            .find('h2').should('include.text', '?').should('exist')
        cy.get('.card.p-4').should('exist')
            .find('.mt-3').should('exist')
        .find('.d-flex.align-items-center.mb-2').should('exist').should('have.length', 4)

    })
})