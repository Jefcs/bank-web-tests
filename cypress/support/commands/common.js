Cypress.Commands.add('verifyMessageToast', (message) => {
  cy.get('.toast').should('have.text', message)
})

Cypress.Commands.add('selectionCombobox', (label, option) => {
  cy.get(`label[for="${label}"]`).parent().as(`campo-${label}`)
  cy.get(`@campo-${label}`).click().contains(option).click()
})
