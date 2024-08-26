// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("openLoginPage", () => {
  cy.visit(Cypress.env("loginUrl"));
});

Cypress.Commands.add("openDropdownPage", () => {
    cy.visit(Cypress.env("dropdownUrl"));
});

Cypress.Commands.add("openCheckboxPage", () => {
  cy.visit(Cypress.env("checkboxUrl"));
});

Cypress.Commands.add("openDragandDropPage", () => {
  cy.visit(Cypress.env("draganddropUrl"));
});

Cypress.Commands.add("openUploadPage", () => {
  cy.visit(Cypress.env("uploadUrl"));
});

Cypress.Commands.add("openRedirectPage", () => {
  cy.visit(Cypress.env("redirectUrl"));
});



Cypress.Commands.add("login", () => {
  cy.openLoginPage();
  cy.log('verifica se os campos estão visíveis')
  cy.get('#username').should("be.visible");
  cy.get("#password").should("be.visible");
  cy.log('Preenche o campo de nome')
  cy.get('#username').type(Cypress.env("USER_NAME"));
  cy.log('Preenche o campo de senha')
  cy.get("#password").type(Cypress.env("PASSWORD"));
  cy.log('Clica no botão')
  cy.get("button.radius").click();
  cy.log('verifica o texto')
  cy.get("#flash").should("contains.text", "You logged into a secure area!");
});


Cypress.Commands.add("logout", () => {
    cy.wait(600);
    cy.log('PClica no botao de logout')
    cy.get("a[href='/logout']").click();
    cy.log('Verifica o texto')
    cy.get("#flash").should("contains.text", "You logged out of the secure area!")
});


Cypress.Commands.add("faker", () => {
  const randomString = Math.random().toString(36).substring(2, 15);
  return `user_${randomString}`;
});


//For Cypress drag and drop custom command
Cypress.Commands.add('draganddrop', (dragSelector, dropSelector) => {
  cy.get(dragSelector).should('exist')
      .get(dropSelector).should('exist');

  const draggable = Cypress.$(dragSelector)[0]; // Pick up this
  const droppable = Cypress.$(dropSelector)[0]; // Drop over this

  const coords = droppable.getBoundingClientRect()
  draggable.dispatchEvent(new MouseEvent('mousedown'));
  draggable.dispatchEvent(new MouseEvent('mousemove', { clientX: 10, clientY: 0 }));
  draggable.dispatchEvent(new MouseEvent('mousemove', {
      clientX: coords.left + 10,
      clientY: coords.top + 10  // A few extra pixels to get the ordering right
  }));
  draggable.dispatchEvent(new MouseEvent('mouseup'));
  return cy.get(dropSelector);
})
