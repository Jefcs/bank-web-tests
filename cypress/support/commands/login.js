Cypress.Commands.add('loginWithValiData', (email, password) => {
  cy.fixture('credentials').then((credentials) => {
    cy.get('#username').click().type(credentials.valid.usuario)
    cy.get('#senha').click().type(credentials.valid.senha)
  })
  cy.get('#login-section > .btn').click()
})

Cypress.Commands.add('loginWithInvalidData', (email, password) => {
  cy.fixture('credentials').then((credentials) => {
    cy.get('#username').click().type(credentials.invalid.usuario)
    cy.get('#senha').click().type(credentials.invalid.senha)
  })
  cy.contains('button', 'Entrar').click()
})
