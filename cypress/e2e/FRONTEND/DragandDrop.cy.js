describe('Example to demonstrate Drag and Drop in cypress', () => {

  beforeEach(() => {

    cy.log('Visite a página de Drag and Drop')
      cy.openDragandDropPage()
     })

 
    it('Should perform mouse down and mouse up actions on draggable elements', () => {
      
      const dataTransfer = new DataTransfer();

    cy.log('Elemento que será arrastado')
      cy.get('#column-a').trigger('dragstart', { dataTransfer });

    cy.log('Área em que vamos soltar o elemento') 
      cy.get('#column-b').trigger('drop', { dataTransfer });
     
    cy.log('Verifique se o elemento alterou de posição')
      cy.get('#column-a header').should('contain', 'B');
      cy.get('#column-b header').should('contain', 'A');
    });
  });

  
