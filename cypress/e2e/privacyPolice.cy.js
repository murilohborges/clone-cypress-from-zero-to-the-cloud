//Lesson 07
//extra 2 - challenge
it('independently test the privacy policy page', () => {
  cy.visit('./src/privacy.html')
  cy.get('h1').contains('h1', 'TAT CSC - Privacy Policy').should('be.visible')
})