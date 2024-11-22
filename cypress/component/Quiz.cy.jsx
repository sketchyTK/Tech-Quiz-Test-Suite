import Quiz from '../../client/src/components/Quiz'

describe('Quiz.cy.tsx', () => {
      it('should render the Start Quiz Button', () => {
        cy.mount(<Quiz/>)
        cy.get('button').should('exist').should('have.text', 'Start Quiz')
      });

      it('should render the Start Quiz Button and then render the sample question', () => {
        cy.intercept('GET', '/api/questions/random', {fixture: 'questions.json'}).as('quizQuestions')
        cy.mount(<Quiz/>)
        
        cy.get('button').should('exist').should('have.text', 'Start Quiz').click()
        cy.wait('@quizQuestions');

        cy.get('.card.p-4').should('exist')
        .find('h2').should('include.text', '?').should('exist')

        cy.get('.card.p-4').should('exist')
        .find('.mt-3').should('exist')
        .find('.d-flex.align-items-center.mb-2').should('exist')
        .find('.alert.alert-secondary.mb-0.ms-2.flex-grow-1').should('have.length', 4).should('exist').should('not.be.empty')
      });
})