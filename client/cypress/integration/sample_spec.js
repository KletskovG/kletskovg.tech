describe('My first Test', () => {
    it('Visit index.html page', () => {
        cy.visit('localhost:3030/pages/index.html');

        cy.contains('Blog').click();

        cy.url().should('include', '/blog');

        cy.contains('About').click();
    });
});