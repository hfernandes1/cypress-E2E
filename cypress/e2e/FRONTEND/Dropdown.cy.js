describe("Testing dropdown page", () =>{


  beforeEach(() => {
    cy.log('Visite a Página de Drop and Down')
    cy.openDropdownPage()
  })

  it("Selecionando o primeiro valor", ()=> {
    
    cy.get("#dropdown").should("contains.text", "Please select an option")
    cy.get("#dropdown").select(1).should("have.value", "1");
    cy.get("#dropdown").should("contains.text", "Option 1")
  });

  it("Selecionando o segundo valor", ()=> {
    cy.get("#dropdown").should("contains.text", "Please select an option")
    cy.get("#dropdown").select(2).should("have.value", "2");
    cy.get("#dropdown").should("contains.text", "Option 2")
  })

  it("Selecionando o primeiro valor e alterando para o segundo", () =>{
    cy.get("#dropdown").should("contains.text", "Please select an option")
    cy.get("#dropdown").select(1).should("have.value", "1");
    cy.get("#dropdown").should("contains.text", "Option 1")
    cy.get("#dropdown").select(2).should("have.value", "2");
    cy.get("#dropdown").should("contains.text", "Option 2")
  });



})