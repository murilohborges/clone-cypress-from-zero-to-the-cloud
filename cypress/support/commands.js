Cypress.Commands.add('fillMandatoryFieldsAndSubmit', (data) => {
    cy.get('#firstName')
      .should('be.visible')
      .type(data.firstName);

    cy.get('#lastName')
      .should('be.visible')
      .type(data.lastName);

    cy.get('#email')
      .should('be.visible')
      .type(data.email);

    cy.get('#open-text-area')
      .should('be.visible')
      .type(data.feedback, { delay: 0 });

    cy.contains('button', 'Send').click();
    cy.get('[class="success"]').should('be.visible');
})