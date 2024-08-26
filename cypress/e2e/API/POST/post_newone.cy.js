describe('Teste Prático Back-end', () => {

   
  it('Criar um celular ', () => {
  
      cy.request({
      method: 'POST',
      url: '/objects',
      body: {
        "name": "Apple MacBook Pro 16",
        "data": {
           "year": 2019,
           "price": 1849.99,
           "CPU model": "Intel Core i9",
           "Hard disk size": "1 TB"
        }
     }
    }).then((response) => {
      cy.wrap(response).then((res) => {

        cy.then(() => {
          cy.log('Verificando o status da resposta');
          expect(res.status).to.eq(200);
        })

        cy.then(() => {
          cy.log('Verificando se o corpo da resposta é um objeto');
          expect(res.body).to.be.an('object');
        })

        cy.then(() => {
          cy.log('Verificando o tipo de dados da propriedade id');
          expect(res.body.id).to.be.a('string'); // Ajustado para string
        })

        cy.then(() => {
          // Log informativo final
          cy.log(`Objeto retornado: ${JSON.stringify(res.body)}`);
        })
      })
    })
  })

  it('Criar um celular com o parametro incorreto ', () => {
  
    cy.request({
      method: 'POST',
      url: '/objects/7',
      failOnStatusCode: false,
      body: 
      {
        "name": "Apple MacBook Pro 16"
      }  
    }).then((res) => {
      cy.log('Verificar o status da requisição')  
      expect(res.status).to.eq(405);
    })
  })
})
