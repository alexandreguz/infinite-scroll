import { scrollAndFind } from './utils';

let begin = 'אֶל־מֹשֶׁ֥ה וְאֶֽל־אַהֲרֹ֖ן לֵאמֹֽר'
let end =   'עִם־טְמֵאָֽה'
let url = 'https://www.sefaria.org/Leviticus.15.1?lang=he&with=all&lang2=he'

describe('Infinite Scroll Testing', () => {
  it('Rolls until find parashahHeader', () => {
    cy.visit(url);
    cy.waitForPageToLoad();
    scrollAndFind(begin, end); 
    cy.get('.prev > .int-he')
    cy.get('.next')
    cy.get('.parashahHeader')
  });
});
