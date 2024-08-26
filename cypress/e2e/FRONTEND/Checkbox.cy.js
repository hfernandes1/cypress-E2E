describe('Checkboxes', () => {

  beforeEach(() => {
    cy.log('Visite a Página de Checkbox')
    cy.openCheckboxPage()
  })

  it('Deve marcar e desmarcar os checkboxes ', () => {
    
    cy.log('verifique se o primeiro checkbox está marcado')
    cy.get('#checkboxes input[type="checkbox"]').first().check().should('be.checked');
    
    cy.log('verifique se o primeiro checkbox nao está marcado')
    cy.get('#checkboxes input[type="checkbox"]').first().uncheck().should('not.be.checked');
    
    cy.log('verifique se o segundo checkbox está marcado')
    cy.get('#checkboxes input[type="checkbox"]').eq(1).should('be.checked');

    cy.log('verifique se o segundo checkbox nao está marcado')
    cy.get('#checkboxes input[type="checkbox"]').eq(1).uncheck().should('not.be.checked');
  })

})