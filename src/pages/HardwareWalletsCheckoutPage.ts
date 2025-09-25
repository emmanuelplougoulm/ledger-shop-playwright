import { Locator, Page } from '@playwright/test'

import { LEDGER_SHOP_BASE_URL } from '../../constants'

export class HardwareWalletsCheckoutPage {
  readonly page: Page

  readonly HARDWARE_WALLETS_URL = `${LEDGER_SHOP_BASE_URL}/pages/hardware-wallet#hardware-wallet-collection`

  //checkout button locators
  readonly flexCartButton: Locator
  readonly ledgerRecoverDeclineOption: Locator
  readonly checkoutButton: Locator
  readonly shippingButton: Locator
  readonly paymentButton: Locator
  readonly standardShippingOption: Locator

  //checkout page fields
  readonly emailInput: Locator
  readonly firstNameInput: Locator
  readonly lastNameInput: Locator
  readonly addressInput: Locator
  readonly postalCodeInput: Locator
  readonly cityInput: Locator
  readonly phoneInput: Locator

  constructor(page: Page) {
    this.page = page

    this.flexCartButton = this.page.locator('[data-cs-override-id="ledger-flex-atc"]')
    this.ledgerRecoverDeclineOption = this.page.getByRole('radio', { name: /no coverage/i })
    this.checkoutButton = this.page.getByRole('button', { name: /checkout/i, exact: true })
    this.shippingButton = page.getByRole('button', { name: /continue to shipping/i })
    this.standardShippingOption = page.getByRole('radio', { name: /standard courier/i })
    this.paymentButton = this.page.getByRole('button', { name: /continue to payment/i })

    // FORM fields
    this.emailInput = page.locator('input[name="email"]')
    this.firstNameInput = this.page.getByRole('textbox', { name: 'First name' })
    this.lastNameInput = this.page.getByRole('textbox', { name: 'Last name' })
    this.addressInput = this.page.getByRole('combobox', { name: 'Address' })
    this.postalCodeInput = this.page.getByRole('textbox', { name: 'Postal code' })
    this.cityInput = this.page.getByRole('textbox', { name: 'City' })
    this.phoneInput = this.page.getByRole('textbox', { name: 'Phone' })
  }

  async goto() {
    await this.page.goto(this.HARDWARE_WALLETS_URL)
  }

  async addFlexToCart() {
    await this.flexCartButton.click()
  }

  async selectNoCoverageOption() {
    await this.page.locator('[data-testid="side-drawer"]').waitFor({ state: 'visible' })

    await this.ledgerRecoverDeclineOption.waitFor({ state: 'visible' })
    await this.ledgerRecoverDeclineOption.click()
  }

  async proceedToCheckout() {
    await this.checkoutButton.click()
  }

  async fillInfosForm() {
    await this.page.locator('[id="shippingAddressForm"]').waitFor({ state: 'visible' })

    await this.emailInput.fill('toto@gmail.com')
    await this.firstNameInput.fill('toto')
    await this.lastNameInput.fill('tata')
    await this.addressInput.fill('2, rue de la paix')
    await this.postalCodeInput.fill('75010')
    await this.cityInput.fill('Paris')
    await this.phoneInput.fill('+33102030405')
  }

  async proceedToShipping() {
    await this.shippingButton.click()
  }

  async selectStandardShipping() {
    await this.standardShippingOption.click()
  }

  async proceedToPayment() {
    await this.paymentButton.click()
  }
}
