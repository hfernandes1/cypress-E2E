describe('Teste Prático Back-end', () => {


  it ('Listar todos os Celulares', () => {

    cy.request({
      method: 'GET',
      url: '/objects',

    })
    .then((response) => {
      expect(response.status).to.eq(200)

      // vou usar o cy.wrap para manipular a resposta
      cy.wrap(response).then((res) => {
      cy.log('Verificar se em cada device contém os campons de ID, name e Data')
      response.body.forEach((device) => {
          expect(device).to.have.property("id");
          expect(device).to.have.property("name");
          expect(device).to.have.property("data");
      })
      cy.log(`Objeto retornado: ${JSON.stringify(response.body)}`);
    })
  })
  })
})