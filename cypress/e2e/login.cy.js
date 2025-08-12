describe('Login', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Login with valid data', () => {
    // Act
    cy.fixture('credentials').then((credentials) => {
      cy.get('#username').click().type(credentials.valid.usuario)
      cy.get('#senha').click().type(credentials.valid.senha)
    })
    cy.get('#login-section > .btn').click()

    // Assert
    cy.contains('h4', 'Realizar Transferência').should('be.visible')
  })

  it('Login with invalid data', () => {
    // Act
    cy.fixture('credentials').then((credentials) => {
      cy.get('#username').click().type(credentials.invalid.usuario)
      cy.get('#senha').click().type(credentials.invalid.senha)
    })
    cy.contains('button', 'Entrar').click()

    // Assert
    cy.get('.toast').should('have.text', 'Erro no login. Tente novamente.')
  })
})
