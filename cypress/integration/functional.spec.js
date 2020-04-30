/// <reference types="cypress" />

import loc from '../support/locators'

describe('Login', () => {
  before(() => {
    cy.login('diegohferraz@hotmail.com', 'asdf1234')
    cy.resetApp()
  })

  it('should create a new account', () => {
    cy.get(loc.MENU.SETTINGS).click()
    cy.get(loc.MENU.ACCOUNTS).click()
    cy.get(loc.ACCOUNTS.NAME).type('nome da conta')

    cy.get(loc.ACCOUNTS.SAVE_BTN).click()

    cy.get(loc.MESSAGE)
      .should('contain', 'inserida com sucesso')
  })

  it('should update an account', () => {
    cy.get(loc.MENU.SETTINGS).click()
    cy.get(loc.MENU.ACCOUNTS).click()

    cy.xpath(loc.ACCOUNTS.XP_EDIT_BTN('nome da conta')).click()
    cy.get(loc.ACCOUNTS.NAME)
      .clear()
      .type('Conta nome alterado')
    cy.get(loc.ACCOUNTS.SAVE_BTN).click()

    cy.get(loc.MESSAGE)
      .should('contain', 'atualizada com sucesso')
  })

  it('should not create an account with the same name', () => {
    cy.get(loc.MENU.SETTINGS).click()
    cy.get(loc.MENU.ACCOUNTS).click()

    cy.get(loc.ACCOUNTS.NAME).type('Conta nome alterado')

    cy.get(loc.ACCOUNTS.SAVE_BTN).click()

    cy.get(loc.MESSAGE)
      .should('contain', 'Erro:')
  })

  it('should create a transaction', () => {
    cy.get(loc.MENU.MOVEMENTS).click()

    cy.get(loc.MOVEMENTS.DESCRIPTION).type('Descrição')
    cy.get(loc.MOVEMENTS.VALUE).type('300')
    cy.get(loc.MOVEMENTS.INVOLVED).type('Nome da Pessoa')
    cy.get(loc.MOVEMENTS.ACCOUNT).select('Conta mesmo nome')
    cy.get(loc.MOVEMENTS.STATUS).click()

    cy.get(loc.MOVEMENTS.SAVE_BTN).click()

    cy.get(loc.MESSAGE)
      .should('contain', 'sucesso')

    cy.xpath(loc.EXTRACT.XP_DESCRIPTION('Descrição'))
      .should('exist')
  })

  it('should get balance', () => {
    cy.get(loc.MENU.HOME).click()

    cy.xpath(loc.BALANCE.XP_ACCOUNT_BALANCE('Conta mesmo nome'))
      .should('contain', '300,00')
  })

  it('should remove transaction', () => {
    cy.get(loc.MENU.EXTRACT).click()

    cy.xpath(loc.EXTRACT.XP_DESCRIPTION_DELETE_BTN('Descrição'))
      .click()

    cy.get(loc.MESSAGE)
      .should('contain', 'sucesso')
  })
})