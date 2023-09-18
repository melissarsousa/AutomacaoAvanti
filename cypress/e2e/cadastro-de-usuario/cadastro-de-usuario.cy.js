import {generateEmail} from "/home/melissa/AutomacaoAvanti/utils/generate-inputs.js"
import '/home/melissa/AutomacaoAvanti/pages/registerPage/register-page.js'

describe('Cenário Cadastro de Usuários', () => {
  
  beforeEach(() =>{
    cy.visit('https://www.automationexercise.com/');
  })
  
  it.only('Validar Cadastro de Usuário com dados válidos', () => {
    cy.clickSignupPage();
    cy.typeName('Teste');
    cy.typeEmail(generateEmail());
    cy.clickSignupButton();
  })

  it('Validar Preenchimento Formulário de registro', () => {
    cy.visit('https://example.cypress.io')
  })

  it('Validar Cadastro de Usuário com dados inválidos', () => {
    cy.visit('https://example.cypress.io')
    // EMAIL JÁ CADASTRADO: teste-avanti@gmail.com
  })


})