/// <reference types="cypress" />


let found = false; 
let scrollStep = 200;  

export function scrollAndFind(begin, end) {

  cy.contains(begin)
   .should('be.visible');

  if (!found) {
    cy.contains(end).then(($el) => {
      if ($el.length > 0) {
        found = true;
        cy.wrap($el).scrollIntoView({ duration: 1000 }).should('be.visible');
      } else {
        window.scrollBy(0, scrollStep);
        cy.wait(500);
        scrollAndFind();
      }
    });
  }
}
