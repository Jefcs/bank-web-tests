describe('Login', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Login with valid data', () => {
    // Act
    cy.loginWithValiData()

    // Assert
    cy.contains('h4', 'Realizar Transferência').should('be.visible')
  })

  it('Login with invalid data', () => {
    // Act
    cy.loginWithInvalidData()

    // Assert
    cy.verifyMessageToast('Erro no login. Tente novamente.')
  })
})
