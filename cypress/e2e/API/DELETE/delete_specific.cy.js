describe('Teste Prático Back-end', () => {

   
  it('Deletar um celular específico', () => {
    
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

      //verifique o status do post
      expect(response.status).to.eq(200)  
      const Idnewuser = response.body.id

      cy.request({
      method: 'DELETE',
      url: `/objects/${Idnewuser}`,
      body: {
        "name": "Apple MacBook Pro PUT API",
        "data": {
           "year": 2019,
           "price": 1849.99,
           "CPU model": "Intel Core i9",
           "Hard disk size": "1 TB"
          }
        }
      }).then((response) => {   
        cy.log('Verificar o status da requisição')   
        expect(response.status).to.eq(200);
      })
    })
  })
})