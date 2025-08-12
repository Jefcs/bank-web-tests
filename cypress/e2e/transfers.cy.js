describe('Transfers', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.fixture('credentials').then((credentials) => {
      cy.get('#username').click().type(credentials.valid.usuario)
      cy.get('#senha').click().type(credentials.valid.senha)
    })
    cy.contains('button', 'Entrar').click()
  })

  it('should perform a transfer successfully', () => {
    // Arrange
    cy.get('label[for="conta-origem"]').parent().as('campo-conta-origem')
    cy.get('@campo-conta-origem')
      .click()
      .contains('João da Silva com saldo de')
      .click()

    cy.get('label[for="conta-destino"]').parent().as('campo-conta-destino')
    cy.get('@campo-conta-destino')
      .click()
      .contains('Maria Oliveira com saldo de')
      .click()
    cy.get('#valor').click().type('100')
    cy.contains('button', 'Transferir').click()
    cy.get('.toast').should('have.text', 'Transferência realizada!')
  })
})
