const locators = {
  ACCOUNTS: {
    NAME: '[data-test=nome]',
    SAVE_BTN: '.btn',
    XP_EDIT_BTN: (name) => `//table//td[contains(., '${name}')]/..//i[@class='far fa-edit']`
  },
  BALANCE: {
    XP_ACCOUNT_BALANCE: (name) => `//td[contains(., '${name}')]/../td[2]`
  },
  EXTRACT: {
    XP_DESCRIPTION: (name) => `//li//span[contains(., '${name}')]`,
    XP_DESCRIPTION_DELETE_BTN: (name) => `//li//span[contains(., '${name}')]/../../..//i[@class='far fa-trash-alt']`
  },
  LOGIN: {
    USER: '[data-test=email]',
    PASSWORD: '[data-test=passwd]',
    BTN: '.btn'
  },
  MENU: {
    ACCOUNTS: '[href="/contas"]',
    EXTRACT: '[data-test=menu-extrato]',
    HOME: '[data-test=menu-home]',
    MOVEMENTS: '[data-test=menu-movimentacao]',
    RESET: '[href="/reset"]',
    SETTINGS: '[data-test=menu-settings]'
  },
  MOVEMENTS: {
    TYPE: '[data-test=tipo-receita]',
    TRANSACTION_DATE: '[data-test=data-transacao]',
    PAYMENT_DATE: '[data-test=data-pagamento]',
    DESCRIPTION: '[data-test=descricao]',
    VALUE: '[data-test=valor]',
    INVOLVED: '[data-test=envolvido]',
    ACCOUNT: '[data-test=conta]',
    STATUS: '[data-test=status]',
    SAVE_BTN: '.btn-primary'
  },
  MESSAGE: '.toast-message'
}

export default locators