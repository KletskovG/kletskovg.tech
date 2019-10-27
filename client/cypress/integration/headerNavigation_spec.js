// // TODO: refactor this test
// // Make check on start
//
// const CONFIG = {
//     PORT: 4200,
// }
//
// describe('Testing header navigation on index page', () => {
//     it('Test navigatin from index page to blog', () => {
//         cy.visit(`http://localhost:${CONFIG.PORT}`);
//
//         cy
//         .contains('Blog')
//         .click()
//         .url().should('include', 'blog')
//     });
//
//     it('Test navigatin from index page to about page', () => {
//         cy.visit(`http://localhost:${CONFIG.PORT}`);
//
//         cy
//         .contains('About')
//         .click()
//         .url().should('include', 'about-me')
//     });
//
//     it('Test navigatin from index page to projects page', () => {
//         cy.visit(`http://localhost:${CONFIG.PORT}`);
//
//         cy
//             .contains('Projects')
//             .click()
//             .url().should('include', 'projects')
//     });
//
//     it('Test navigatin from index page to about page', () => {
//         cy.visit(`http://localhost:${CONFIG.PORT}`);
//
//         cy
//             .contains('Contact')
//             .click()
//             .url().should('include', 'contact')
//     });
// });
//
// describe('Testing header navigation on Contact page', () => {
//
//     it('Test navigatin from Contact page to blog', () => {
//         cy.visit(`http://localhost:${CONFIG.PORT}/contact`);
//
//         cy
//             .contains('Blog')
//             .click()
//             .url().should('include', 'blog')
//     });
//
//     it('Test navigatin from contact page to about page', () => {
//         cy.visit(`http://localhost:${CONFIG.PORT}/contact`);
//
//         cy
//             .contains('About')
//             .click()
//             .url().should('include', 'about-me')
//     });
//
//     it('Test navigatin from contact page to project page', () => {
//         cy.visit(`http://localhost:${CONFIG.PORT}/contact`);
//
//         cy
//             .contains('Projects')
//             .click()
//             .url().should('include', 'projects')
//     });
//
//     it('Test navigatin from contact page to index page', () => {
//         cy.visit(`http://localhost:${CONFIG.PORT}/contact`);
//
//         cy
//             .contains('Home')
//             .click()
//             .url().should('include', '/')
//     });
// });
//
//
// describe('Testing header navigation on Blog page', () => {
//
//     it('Test navigatin from Blog page to blog', () => {
//         cy.visit(`http://localhost:${CONFIG.PORT}/blog`);
//
//         cy
//             .contains('Home')
//             .click()
//             .url().should('include', '/')
//     });
//
//     it('Test navigatin from Blog page to about page', () => {
//         cy.visit(`http://localhost:${CONFIG.PORT}/Blog`);
//
//         cy
//             .contains('About')
//             .click()
//             .url().should('include', 'about-me')
//     });
//
//     it('Test navigatin from Blog page to project page', () => {
//         cy.visit(`http://localhost:${CONFIG.PORT}/blog`);
//
//         cy
//             .contains('Projects')
//             .click()
//             .url().should('include', 'projects')
//     });
//
//     it('Test navigatin from contact blog to index contact', () => {
//         cy.visit(`http://localhost:${CONFIG.PORT}/blog`);
//
//         cy
//             .contains('Contact')
//             .click()
//             .url().should('include', '/contact')
//     });
// });
//
// describe('Testing header navigation on About page', () => {
//
//     it('Test navigatin from About page to blog', () => {
//         cy.visit(`http://localhost:${CONFIG.PORT}/about-me`);
//
//         cy
//             .contains('Blog')
//             .click()
//             .url().should('include', 'blog')
//     });
//
//     it('Test navigatin from About page to contact page', () => {
//         cy.visit(`http://localhost:${CONFIG.PORT}/about-me`);
//
//         cy
//             .contains('Contact')
//             .click()
//             .url().should('include', '/contact')
//     });
//
//     it('Test navigatin from About page to project page', () => {
//         cy.visit(`http://localhost:${CONFIG.PORT}/about-me`);
//
//         cy
//             .contains('Projects')
//             .click()
//             .url().should('include', 'projects')
//     });
//
//     it('Test navigatin from About page to index page', () => {
//         cy.visit(`http://localhost:${CONFIG.PORT}/about-me`);
//
//         cy
//             .contains('Home')
//             .click()
//             .url().should('include', '/')
//     });
// });
//
