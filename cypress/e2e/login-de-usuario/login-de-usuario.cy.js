require('@cypress/xpath');

describe("Cenário 1 - Login de Usuário ", () => {
    
    beforeEach(() =>{
        cy.visit('https://www.automationexercise.com/');
      })
    
    it("Fazer login com dados válidos", () => {
        // Abre o navegador e navega para a URL
        cy.visit("http://automationexercise.com");

        // Clica no botão 'Inscrição / Login'
        cy.xpath("//a[contains(text(),'Signup / Login')]").click();

        // Verifica se o texto 'Faça login na sua conta' é visível
        cy.xpath("(//div[@class='login-form']//input)[2]").should("be.visible");

        // Insere e-mail incorreto e senha correta
        cy.xpath("(//div[@class='login-form']//input)[2]").type("melissarios@gmail.com");
        cy.xpath("(//div[@class='login-form']//input)[3]").type("12345678");

        // Clica no botão ‘Conecte-se’
        cy.xpath("//div[@class='login-form']//button[1]").click();

        // Verifica se username é visível
        cy.xpath("//a[contains(.,'Logged in as melissa')]").should("be.visible");
    });

    it("Fazer login com dados inválidos", () => {
        // Clica no botão 'Inscrição / Login'
      cy.xpath("//a[contains(text(),'Signup / Login')]").click();
  
      // Verifica se o texto 'Faça login na sua conta' é visível
      cy.xpath("(//div[@class='login-form']//input)[2]").should("be.visible");
  
      // Insere e-mail incorreto e senha correta
      cy.xpath("(//div[@class='login-form']//input)[2]").type("melissars@gmail.com");
      cy.xpath("(//div[@class='login-form']//input)[3]").type("12345678");
  
      // Clica no botão ‘Conecte-se’
      cy.xpath("//div[@class='login-form']//button[1]").click();
  
      // Verifica se 'Seu e-mail ou senha está incorreto!' é visível
      cy.xpath("//p[text()='Your email or password is incorrect!']").should("be.visible");
    });
  });

