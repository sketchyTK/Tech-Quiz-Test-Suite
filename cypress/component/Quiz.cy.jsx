import Quiz from '../../client/src/components/Quiz'

describe('Quiz.cy.tsx', () => {
    it('should render the Start Quiz Button', () => {
        cy.mount(<Quiz/>)
      cy.get('button').should('exist').should('have.text', 'Start Quiz')
      });

})