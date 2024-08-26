describe('Example to demonstrate file upload in cypress', function () {


  beforeEach(() => {
    cy.openUploadPage()
  })


  it('File Upload using selectFile with select mode', () => {
    
    cy.log('Buscar uma foto no arquivo fixtures do cypress')
      cy.get('#file-upload').selectFile('cypress/fixtures/images/evening.png')
    
    cy.log('Clica no na opção de submeter um arquivo')
      cy.get('#file-submit').click()
    
    cy.log('verifica se o campo contém o arquivo submetido')
      cy.get('#uploaded-files').contains('evening.png')
  })

})
