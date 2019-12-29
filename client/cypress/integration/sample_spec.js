describe('Testing the hero list page', function () {

  it('Should test the navigation', function () {
    cy.visit('http://localhost:80/blog');
    cy.url().should('include', '/blog');
    cy.visit('http://localhost:80/testastas');
    cy.get('h1').contains('404');
  });

});
