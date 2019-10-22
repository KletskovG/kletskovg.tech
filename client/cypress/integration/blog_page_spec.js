const pageString = 'localhost:3030/pages/blog-page.html';

describe('Testing the blog page script', () => {
   it ('Testing navigation to index page', () => {
      cy.visit(pageString)

      cy
          .contains('Home')
          .click()
          .url().should('include', 'index')
   });

    it ('Testing navigation to about page', () => {
        cy.visit(pageString);

        cy
            .contains('Contact')
            .click()
            .url().should('include', '/contact');

    });

    it ('Testing navigation to projects page', () => {
        cy.visit(pageString);

        cy
            .contains('Projects')
            .click()
            .url().should('include', '/projects');

    });


});