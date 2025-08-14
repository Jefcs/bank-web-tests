Cypress.Commands.add('doTransfer', (origin, target, amount) => {
  cy.selectionCombobox('conta-origem', origin)
  cy.selectionCombobox('conta-destino', target)

  cy.get('#valor').click().type(amount)
  cy.contains('button', 'Transferir').click()
})
// This command logs in a user with the provided email and password.
