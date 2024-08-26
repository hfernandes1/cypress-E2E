describe('Teste Prático Back-end', () => {

  let Idnewuser 
  beforeEach(() => {

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
      Idnewuser = response.body.id
    })
  })

  it('Atualizar um celular específico', () => {
  
    cy.request({
    method: 'put',
    url: `/objects/${Idnewuser}`,
    body: {
      "name": "Apple MacBook Pro PUT API",
    }
    }).then((response) => {
    cy.log('Verificar o status da requisição')  
    expect(response.status).to.eq(200);
    cy.log('Verificar a propiedade do body')  
    expect(response.body).to.have.property('name', 'Apple MacBook Pro PUT API')
    })
  })


  it('Atualizar Todos os dados de um celular ', () => {

    cy.request({
    method: 'put',
    url: `/objects/${Idnewuser}`,
    body: {
      "name": "Apple MacBook Pro PUT API",
      "data": {
        "year": 2021,
        "price": 2499.99,
        "CPU model": "Apple M1",
         "Hard disk size": "2 TB"
        }
      }
    }).then((response) => {

      cy.log('Verificar o status da requisição')  
      expect(response.status).to.eq(200);

      cy.log('Verificar o body da requisição')  
      expect(response.body).to.have.property('name', 'Apple MacBook Pro PUT API');
      expect(response.body.data).to.deep.equal({
        "year": 2021,
        "price": 2499.99,
        "CPU model": "Apple M1",
        "Hard disk size": "2 TB"
      })
    })
  })

  it('Erro ao passar o parametro para os dados de um celular ', () => {
    cy.request({
    method: 'PUT',
    url: `/objects/${Idnewuser}`,
    failOnStatusCode: false,
    body: {
      "name": "",
      "data": {
        "year": "invalidYear@#@#@", // Dado inválido
        "price": "NaN><><E:W<:W<@#", // Dado inválido
      }
    }
    }).then((response) => {
      cy.log('Verificar o status da requisição')  
     expect(response.status).to.eq(400);  // erro 400 Bad Request
     
     cy.log('Verificar se existe a mensagem de erro')  
     expect(response.body).to.have.property('error');
    });

  })
})