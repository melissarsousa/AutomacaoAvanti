import {generateEmail} from "/home/melissa/AutomacaoAvanti/utils/generate-inputs.js"
import '/home/melissa/AutomacaoAvanti/pages/registerPage/register-page.js'

describe('Cenário 5 - Cadastro de Usuários', () => {
  
  beforeEach(() =>{
    cy.visit('https://www.automationexercise.com/');
  })
  
  it.only('Validar Cadastro de Usuário com dados válidos', () => {
    cy.clickSignupPage();
    cy.confirmSignupPage('div[class="signup-form"]', 'New User Signup!');

    cy.typeName('Teste');
    cy.typeEmail('melissarios@gmail.com'); //cy.typeEmail(generateEmail());
    cy.clickSignupButton();

    cy.confirmSignupPage('div[class="login-form"]', 'Enter Account Information');
  })

  it('Validar Preenchimento Formulário de registro', () => {
    cy.visit('https://example.cypress.io')
  })

  it('Validar Cadastro de Usuário com dados inválidos', () => {
    cy.clickSignupPage();
    cy.confirmSignupPage('div[class="signup-form"]', 'New User Signup!');

    cy.typeName('Teste');
    cy.typeEmail('melissarios@gmail.com');
    cy.clickSignupButton();

    cy.confirmSignupPage('div[class="signup-form"]', 'Email Address already exist!');
    //Enter Account Information
  })


})