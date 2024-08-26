describe("Testing login page", () => {

    beforeEach(() => {
      cy.openLoginPage()
    })
      
    it("Realizando o login", () => {
        cy.login();
    })

    it("Realizando o logout", () => {
        cy.login()
        cy.logout()
    })

    it("Login sem credenciais", () => {
        cy.log('Clica no botão de login')
        cy.get("button.radius").click();

        cy.log('Verifica se o alerta está visível')
        cy.get("#flash").should("be.visible");

        cy.log('Verifica o texto')
        cy.get("#flash").should("contains.text", "Your username is invalid!");
    })

    it("Login com um nome inválido", () => {
      
      cy.log('Digita o username invalido')
      cy.get("#username").type('invalid');

      cy.log('Clica no botão de login')
      cy.get("button.radius").click();

      cy.log('Verifica se o alerta está visível')
      cy.get("#flash").should("be.visible");

      cy.log('Verifica o texto')
      cy.get("#flash").should("contains.text", "Your username is invalid!");
    })

    it("Login com um password inválido", () => {

      //utiliza-se cypress env para proteger/organizar os dados sensíveis. 
      cy.log('Digita o username')
      cy.get("#username").type(Cypress.env("USER_NAME"));

      cy.log('Digita a senha invalida')
      cy.get("#password").type('invalid');

      cy.log('Clica no botão de login')
      cy.get("button.radius").click();

      cy.log('Verifica se o alerta está visível')
      cy.get("#flash").should("be.visible");
      
      cy.log('Verifica o texto')
      cy.get("#flash").should("contains.text", "Your password is invalid!");
    })

})