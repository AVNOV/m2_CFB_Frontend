import Input from './index';

describe('<Input />', () => {
  it('renders input component correctly', () => {
    const value: string = 'test';
    const name: string = 'test';
    const label: string = 'test';
    const type: string = 'text';
    cy.mount(<Input name={name} label={label} type={type} value={value} />);

    cy.get('input').should('exist');

    cy.contains('label', label).should('exist');

    cy.get('input').should('have.value', value);

    cy.get('input').should('not.be.disabled');

    cy.get('input').click().should('be.focused');
    cy.mount(
      <Input name={name} label={label} type={type} value={value} disabled />,
    );
    cy.get('input').should('be.disabled');
  });
});
