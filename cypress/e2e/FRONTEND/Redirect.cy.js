describe('Checkboxes', () => {

  beforeEach(() => {
    cy.openRedirectPage()
    cy.get('#redirect').click()
  })

  it('check the 200 page', () => {

    cy.log('Clica no na opção de status 200')
    cy.get(':nth-child(1) > a').click()

    cy.log('Verifica se contém o texto de status 200')
    cy.get('p').should('contain.text', '200 status code.');
  })

  it('check the 301 page', () => {

    cy.log('Clica no na opção de status 301')
    cy.get('ul > :nth-child(2) > a').click()

    cy.log('Verifica se contém o texto de status 301')
    cy.get('p').should('contain.text', '301 status code.');
  })

  it('check the 404 page', () => {

    cy.log('Clica no na opção de status 404')
    cy.get(':nth-child(3) > a').click()

    cy.log('Verifica se contém o texto de status 404')
    cy.get('p').should('contain.text', '404 status code.');
  })

  it('check the 500 page', () => {

    cy.log('Clica no na opção de status 500')
    cy.get(':nth-child(4) > a').click()

    cy.log('Verifica se contém o texto de status 500')
    cy.get('p').should('contain.text', '500 status code.');
  })
})