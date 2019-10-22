describe('Testing the index.page', () => {
    it ('Testing navigation to blog page', () => {
        cy.visit('localhost:3030/pages/index.html');

        cy
        .contains('Blog')
        .click()
        .url().should('include', '/blog');

    });

    it('Testing the navigation to projects page', ()  => {
        cy.visit('localhost:3030/pages/index.html');

        cy
            .contains('Projects')
            .click()
            .url().should('include', '/projects');

    })

    it ('Testing navigation to about page', () => {
        cy.visit('localhost:3030/pages/index.html');

        cy
            .contains('Contact')
            .click()
            .url().should('include', '/contact');

    });

    it ('Testing navigation to about page', () => {
        cy.visit('localhost:3030/pages/index.html');

        cy
            .contains('About')
            .click()
            .url().should('include', '/about');

    });

});