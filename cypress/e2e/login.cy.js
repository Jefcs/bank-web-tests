describe('Login', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4000')
  })

  it('Login with valid data', () => {
    // Act
    cy.get('#username').click().type('julio.lima')
    cy.get('#senha').click().type('123456')
    cy.get('#login-section > .btn').click()

    // Assert
    cy.contains('h4', 'Realizar Transferência').should('be.visible')
  })

  it.only('Login with invalid data', () => {
    // Act
    cy.get('#username').click().type('julio.lima')
    cy.get('#senha').click().type('23145')
    cy.contains('button', 'Entrar').click()

    // Assert
    cy.get('.toast').should('have.text', 'Erro no login. Tente novamente.')
  })
})
