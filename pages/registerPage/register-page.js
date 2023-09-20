Cypress.Commands.add('clickSignupPage', () => {
    cy.get('a[href="/login"]').contains(' Signup / Login').click();
});

Cypress.Commands.add('typeName', (registerName) => {
    cy.get('input[data-qa="signup-name"]').type(registerName);
});

Cypress.Commands.add('typeEmail', (registerEmail) => {
    cy.get('button[data-qa="signup-button"]').type(registerEmail);
});

Cypress.Commands.add('clickSignupButton', () => {
    cy.get('button[data-qa="signup-button"]').click();
});

Cypress.Commands.add('confirmSignupPage', (element, text) => {
    cy.get(element).contains(text);
});

