Cypress.Commands.add('clickSignupPage', () => {
    cy.get('a[href="/login"]').contains(' Signup / Login').click();
});

Cypress.Commands.add('typeName', (registerName) => {
    cy.get('input[data-qa="signup-name"]').type(registerName);
});

Cypress.Commands.add('typeEmail', (registerEmail) => {
    cy.get('button[data-qa="signup-button"]').type(registerEmail);
});

Cypress.Commands.add('typePassword', (password) => {
    cy.get('input[id="password"]').type(password);
});

Cypress.Commands.add('typeFirstName', (firstName) => {
    cy.get('input[id="first_name"]').type(firstName);
});

Cypress.Commands.add('typeLastName', (lastName) => {
    cy.get('input[id="last_name"]').type(lastName);
});

Cypress.Commands.add('typeAdress1', (adress1) => {
    cy.get('input[id="address1"]').type(adress1);
});

Cypress.Commands.add('typeState', (state) => {
    cy.get('input[id="state"]').type(state);
});

Cypress.Commands.add('typeCity', (city) => {
    cy.get('input[id="city"]').type(city);
});

Cypress.Commands.add('typeZipcode', (zipcode) => {
    cy.get('input[id="zipcode"]').type(zipcode);
});

Cypress.Commands.add('typeMobileNumber', (mobileNumber) => {
    cy.get('input[id="mobile_number"]').type(mobileNumber);
});

Cypress.Commands.add('clickSignupButton', () => {
    cy.get('button[data-qa="signup-button"]').click();
});

Cypress.Commands.add('confirmSignupPage', (element, text) => {
    cy.get(element).contains(text);
});

Cypress.Commands.add('confirmValElements', (element, text) => {
    cy.get(element).invoke('val').should('eq', text);
});

Cypress.Commands.add('inputSelectFields', (element, value) => {
    cy.get(element).select(value).invoke('val');
});

Cypress.Commands.add('clickCreateAccountButton', () => {
    cy.get('button[class="btn btn-default"]').contains('Create Account').click();
});

Cypress.Commands.add('confirmAccountCreated', () => {
    cy.get('div[class="col-sm-9 col-sm-offset-1"]').contains('Account Created!');
});
