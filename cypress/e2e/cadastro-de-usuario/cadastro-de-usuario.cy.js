describe('Cenário Cadastro de Usuários', () => {
  
  beforeEach(() =>{
    cy.visit('https://www.automationexercise.com/');
  })
  
  it('Validar Cadastro de Usuário com dados válidos', () => {
    cy.get('a[href="/login"]').contains(' Signup / Login').click();
    cy.get('input[data-qa="signup-name"]').type('Teste');
    cy.get('button[data-qa="signup-button"]').type('email-teste@gmail.com');
    cy.get('button[data-qa="signup-button"]').click();
  })

  it('Validar Preenchimento Formulário de registro', () => {
    cy.visit('https://example.cypress.io')
  })

  it('Validar Cadastro de Usuário com dados inválidos', () => {
    cy.visit('https://example.cypress.io')
  })


})