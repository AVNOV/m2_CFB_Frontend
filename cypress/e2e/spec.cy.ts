describe('Site web', () => {
  it('Viste le site', () => {
    cy.visit('/');
    cy.contains('Quizziky').should('be.visible');
  });
});
