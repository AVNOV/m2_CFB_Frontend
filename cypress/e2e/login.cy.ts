describe('Page de connexion', () => {
  it('Affiche la page de connexion', () => {
    cy.visit('/');
    cy.contains('Se connecter').click();
    cy.url().should('include', '/login');
    cy.contains('Se connecter').should('be.visible');
  });

  beforeEach(() => {
    cy.visit('/login');
  });

  it('Permet de se connecter avec des identifiants valides', () => {
    const email: string = 'test@test.com';
    const password: string = 'test';
    // Remplir le formulaire avec un email et un mot de passe valides
    cy.get('input[type="email"]').type(email);
    cy.get('input[type="password"]').type(password);

    cy.intercept('POST', 'api/login', {
      statusCode: 201,
      fixture: '/login/success.json',
    }).as('user');
    cy.get('button').click({ multiple: true });

    cy.wait('@user').then(({ request, response }) => {
      expect(response?.statusCode).to.equal(201);
      expect(request?.body).to.have.property('email');
      expect(request?.body).to.have.property('password');
      expect(request?.body.email).to.equal(email);
      expect(request?.body.password).to.equal(password);

      expect(response?.body).to.have.property('user');
      expect(response?.body).to.have.property('access_token');
    });
    // Vérifier la redirection après la connexion
    cy.url().should('include', '/');
    cy.contains('test').should('be.visible');
  });

  it("Affiche une erreur en cas d'identifiants invalides", () => {
    // Remplir le formulaire avec des identifiants incorrects
    cy.get('input[type="email"]').type('emailIncorrect@emailIncorrect.com');
    cy.get('input[type="password"]').type('motDePasseIncorrect');
    cy.intercept('POST', 'api/login', {
      statusCode: 400,
      fixture: '/login/fail.json',
    }).as('user');
    cy.get('button').click({ multiple: true });

    // Vérifier l'affichage du message d'erreur
    cy.contains("L'email ou le mot de passe ne correspond pas").should(
      'be.visible',
    );
  });
});
