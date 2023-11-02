import React from 'react';
import InputText from './InputText';

describe('<InputText />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<InputText inputType="text" />);
  });
});
