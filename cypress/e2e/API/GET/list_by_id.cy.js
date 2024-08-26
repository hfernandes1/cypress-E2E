describe('Teste Prático Back-end', () => {


  // vou mostrar dois métodos para retornar a resposta, ou criar mais casos de testes
  // O 1º deles é fazer um unico request e passar as validações via response: 

  it('Deve retornar o objeto com ID 7 e validar suas propriedades', () => {
    cy.request({
      method: 'GET',
      url: '/objects/7'
    }).then((response) => {
      // vou usar o cy.wrap para manipular a resposta
      cy.wrap(response).then((res) => {

        // E vou usar um cy.then em cada validação, assim eu consigo
        // garantir a ordem dos logs e asserções no portal do cypress ( somente o cy.log, as ordens das asserções ficam separadas)

        cy.then(() => {
          cy.log('Verificando o status da resposta...');
          expect(res.status).to.eq(200);
        })

        cy.then(() => {
          cy.log('Verificando se o corpo da resposta é um objeto...');
          expect(res.body).to.be.an('object');
        })

        cy.then(() => {
          cy.log('Verificando se o objeto contém as propriedades: id, name e data...');
          expect(res.body).to.have.all.keys('id', 'name', 'data');
        })

        cy.then(() => {
          cy.log('Verificando o tipo de dados da propriedade id...');
          expect(res.body.id).to.be.a('string'); // Ajustado para string
        })

        cy.then(() => {
          cy.log('Verificando o tipo de dados da propriedade name...');
          expect(res.body.name).to.be.a('string');
        })

        cy.then(() => {
          cy.log('Verificando o tipo de dados da propriedade data...');
          expect(res.body.data).to.be.an('object'); // Ajuste o tipo conforme o esperado
        })

        cy.then(() => {
          cy.log('Verificando se o ID retornado é "7"...');
          expect(res.body.id).to.eq('7'); // Confirmar que o ID é o esperado como string
        })

        cy.then(() => {
          // Log informativo final
          cy.log(`Objeto retornado: ${JSON.stringify(res.body)}`);
        })
      })
    })
  })

})