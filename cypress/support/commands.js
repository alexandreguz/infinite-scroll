Cypress.Commands.add('waitForPageToLoad', () => {
    cy.get('.loadingMessage').should('be.visible')
    cy.contains('טוען מידע').should('not.be.visible'); 
  });
  