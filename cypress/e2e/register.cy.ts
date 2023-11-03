describe("Page d'inscription", () => {
  it("Affiche la page d'inscription", () => {
    cy.visit('/');
    cy.contains('Se connecter').click();
    cy.contains('Cliquez ici').click();
    cy.url().should('include', '/register');
    cy.contains("S'enregistrer").should('be.visible');
  });

  beforeEach(() => {
    cy.visit('/register');
  });

  const email: string = 'test@test.com';
  const password: string = 'test';
  const firstname: string = 'test';
  const lastname: string = 'test';

  it("Permet de s'inscrire à l'application", () => {
    // Remplir le formulaire avec un email et un mot de passe valides
    cy.get('input[type="email"]').type(email);
    cy.get('input[type="password"]').type(password);
    cy.get('input[data-test="firstname"]').type(firstname);
    cy.get('input[data-test="lastname"]').type(lastname);

    cy.intercept('POST', 'api/register', {
      statusCode: 201,
      fixture: '/register/success.json',
    }).as('user');
    cy.get('button').click({ multiple: true });

    cy.wait('@user').then(({ request, response }) => {
      expect(response?.statusCode).to.equal(201);
      expect(request?.body).to.have.property('firstname');
      expect(request?.body).to.have.property('lastname');
      expect(request?.body).to.have.property('email');
      expect(request?.body).to.have.property('password');
      expect(request?.body.firstname).to.equal(firstname);
      expect(request?.body.lastname).to.equal(lastname);
      expect(request?.body.email).to.equal(email);
      expect(request?.body.password).to.equal(password);

      expect(response?.body).to.have.property('firstname');
      expect(response?.body).to.have.property('lastname');
      expect(response?.body).to.have.property('email');
      expect(response?.body).to.have.property('password');
      expect(response?.body).to.have.property('id');
      expect(response?.body).to.have.property('updated_at');
      expect(response?.body).to.have.property('created_at');
    });

    // Vérifier le message d'ajout d'utilisateur
    cy.contains('Votre compte a été créé avec succès').should('be.visible');

    // Vérifier la redirection après la connexion
    cy.url().should('include', '/login');
  });

  it("Affiche une erreur en cas d'identifiants invalides", () => {
    // Remplir le formulaire avec des identifiants incorrects
    cy.get('input[type="email"]').type(email);
    cy.get('input[type="password"]').type(password);
    cy.get('input[data-test="firstname"]').type(firstname);
    cy.get('input[data-test="lastname"]').type(lastname);
    cy.intercept('POST', 'api/register', {
      statusCode: 400,
      fixture: '/register/fail.json',
    }).as('user');
    cy.get('button').click({ multiple: true });

    // Vérifier l'affichage du message d'erreur
    cy.contains('Problème lors de la création de votre compte').should(
      'be.visible',
    );
  });
});
