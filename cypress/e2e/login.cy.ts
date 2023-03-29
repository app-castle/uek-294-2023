describe('Login', () => {
  it('can fill out form and log in', () => {
    cy.visit('/login');

    cy.get('[name="email"]').type('markus@appcastle.ch');
    cy.get('[name="password"]').type('test');
    cy.get('button').click();

    cy.location('pathname').should('eq', '/');
  });
});
