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
    const randomEmailSignup = generateEmail();
    cy.typeEmail(randomEmailSignup);
    cy.clickSignupButton();

    // Página de formulário de cadastro
    cy.confirmSignupPage('div[class="login-form"]', 'Enter Account Information');
    cy.confirmValElements('input[id="name"]', 'Teste');
    cy.confirmValElements('input[id="email"]', randomEmailSignup);
    cy.typePassword('12345678');
    cy.inputSelectFields('select[id="days"]', '1');
    cy.inputSelectFields('select[id="months"]', 'January');
    cy.inputSelectFields('select[id="years"]', '2000');
    cy.typeFirstName('Melissa');
    cy.typeLastName('Teste');
    cy.typeAdress1('Teste');
    cy.inputSelectFields('select[id="country"]', 'India');
    cy.typeState('Teste');
    cy.typeCity('Teste');
    cy.typeZipcode('123456');
    cy.typeMobileNumber('11111111');
    
    cy.clickCreateAccountButton();
    cy.confirmAccountCreated();

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