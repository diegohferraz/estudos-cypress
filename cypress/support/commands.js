
import loc from './locators'

Cypress.Commands.add("login", (email, password) => {
    cy.visit('http://barrigareact.wcaquino.me/')

    cy.get(loc.LOGIN.USER).type(email)
    cy.get(loc.LOGIN.PASSWORD).type(password)
    cy.get(loc.LOGIN.BTN).click()
    cy.get(loc.MESSAGE)
      .should('exist', { timeout: 7000 })
 })

 Cypress.Commands.add("resetApp", (email, password) => {
  cy.get(loc.MENU.SETTINGS).click()
  cy.get(loc.MENU.RESET).click()
})