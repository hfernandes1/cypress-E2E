describe('Teste Prático Back-end', () => {


  it ('Listar um range específico de celulares', () => {

    cy.request({
      method: 'GET',
      url: '/objects',
      qs: {
        id: [3, 5, 10]
      }      
    }).then((response) => {
      expect(response.status).to.eq(200)

      // vou usar o cy.wrap para manipular a resposta
      cy.wrap(response).then((res) => {

        const Ids = response.body.map(obj => Number(obj.id));
        expect(Ids).to.include.members([3, 5, 10]);
        cy.log('Retornar somente os Ids solicitados')
        cy.log(`Objeto retornado: ${JSON.stringify(response.body)}`);
      })
    })
  })
})