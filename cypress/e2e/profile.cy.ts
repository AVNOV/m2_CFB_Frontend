import { login } from '../../slices/auth.slice';

describe('Page de connexion', () => {
  const email: string = 'test@test.com';
  const firstname: string = 'test';
  const lastname: string = 'test';
  it('Acces au store', () => {
    cy.visit('/');
    cy.window()
      .its('Cypress')
      .its('store')
      .invoke(
        'dispatch',
        login({
          user: {
            firstname: firstname,
            lastname: lastname,
            email: email,
          },
        }),
      );
  });
  it('Affiche la page de connexion', () => {
    cy.visit('/');
    cy.window()
      .its('Cypress')
      .its('store')
      .invoke(
        'dispatch',
        login({
          user: {
            firstname: firstname,
            lastname: lastname,
            email: email,
          },
        }),
      );
    cy.contains('test').click();
    cy.contains('Profil').click();
    cy.url().should('include', '/profile');
    cy.contains('Mes informations').should('be.visible');
    cy.get('span[data-test="firstname"]')
      .contains(firstname)
      .should('be.visible');
    cy.get('span[data-test="lastname"]')
      .contains(lastname)
      .should('be.visible');
    cy.get('span[data-test="email"]').contains(email).should('be.visible');
  });
});
