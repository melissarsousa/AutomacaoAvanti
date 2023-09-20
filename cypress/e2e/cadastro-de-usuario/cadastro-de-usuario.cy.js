import {generateEmail} from "/home/melissa/AutomacaoAvanti/utils/generate-inputs.js"
import '/home/melissa/AutomacaoAvanti/pages/registerPage/register-page.js'

describe('Cenário 5 - Cadastro de Usuários', () => {
  
  beforeEach(() =>{
    cy.visit('https://www.automationexercise.com/');
  })
  
  it('Validar Cadastro de Usuário com dados válidos', () => {
    cy.clickSignupPage();
    cy.confirmSignupPage('div[class="signup-form"]', 'New User Signup!');

    cy.typeName('Teste');
    cy.typeEmail(generateEmail());
    cy.clickSignupButton();

    cy.confirmSignupPage('div[class="login-form"]', 'Enter Account Information');
  })

  it.only('Validar Preenchimento Formulário de registro', () => {
    // Página inicial de cadastro
    cy.clickSignupPage();
    cy.confirmSignupPage('div[class="signup-form"]', 'New User Signup!');
    cy.typeName('Teste');
    cy.typeEmail(generateEmail());
    cy.clickSignupButton();

    // Página de formulário de cadastro
    cy.confirmSignupPage('div[class="login-form"]', 'Enter Account Information');
    cy.get('input[id="name"]').invoke('val').should('eq', 'Teste');
    //cy.get('input[id="email"]').invoke('val').should('eq', 'melissateste@gmail.com');
    cy.get('input[id="password"]').type('12345678');
    cy.get('select[id="days"]').select('1').invoke('val');
    cy.get('select[id="months"]').select('January').invoke('val');
    cy.get('select[id="years"]').select('2000').invoke('val');
    cy.get('input[id="first_name"]').type('Melissa');
    cy.get('input[id="last_name"]').type('Teste');
    cy.get('input[id="address1"]').type('Teste');
    cy.get('select[id="country"]').invoke('val').should('eq', 'India');
    cy.get('input[id="state"]').type('Teste');
    cy.get('input[id="city"]').type('Teste');
    cy.get('input[id="zipcode"]').type('123456');
    cy.get('input[id="mobile_number"]').type('11111111');
    
    cy.get('button[class="btn btn-default"]').contains('Create Account').click();
    cy.get('div[class="col-sm-9 col-sm-offset-1"]').contains('Account Created!');

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