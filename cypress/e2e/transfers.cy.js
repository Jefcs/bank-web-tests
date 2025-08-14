describe('Transfers', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.loginWithValiData()
  })

  it('should perform a transfer successfully', () => {
    cy.makeTransfer(
      'João da Silva com saldo de',
      'Maria Oliveira com saldo de',
      '100'
    )
    cy.verifyMessageToast('Transferência realizada!')
  })

  it('should display error when trying to transfer more than 5k without token', () => {
    cy.makeTransfer(
      'João da Silva com saldo de',
      'Maria Oliveira com saldo de',
      '5001'
    )
    cy.verifyMessageToast(
      'Autenticação necessária para transferências acima de R$5.000,00.'
    )
  })
})
