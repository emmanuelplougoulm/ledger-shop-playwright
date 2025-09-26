import { Locator, Page, expect } from '@playwright/test'

interface UserData {
  email: string
  firstName: string
  lastName: string
  address: string
  postalCode: string
  city: string
  phone: string
}

export class InformationPage {
  readonly page: Page

  readonly shippingButton: Locator
  readonly paymentButton: Locator

  readonly emailInput: Locator
  readonly firstNameInput: Locator
  readonly lastNameInput: Locator
  readonly addressInput: Locator
  readonly postalCodeInput: Locator
  readonly cityInput: Locator
  readonly phoneInput: Locator

  constructor(page: Page) {
    this.page = page

    this.shippingButton = page.getByRole('button', { name: /continue to shipping/i })
    this.paymentButton = page.getByRole('button', { name: /continue to payment/i })

    this.emailInput = page.locator('input[name="email"]')
    this.firstNameInput = page.getByRole('textbox', { name: 'First name' })
    this.lastNameInput = page.getByRole('textbox', { name: 'Last name' })
    this.addressInput = page.getByRole('combobox', { name: 'Address' })
    this.postalCodeInput = page.getByRole('textbox', { name: 'Postal code' })
    this.cityInput = page.getByRole('textbox', { name: 'City' })
    this.phoneInput = page.getByRole('textbox', { name: 'Phone' })
  }

  async fillShippingForm(userData: UserData): Promise<void> {
    await expect(this.page.locator('[id="shippingAddressForm"]')).toBeVisible()
    await this.emailInput.fill(userData.email)
    await this.firstNameInput.fill(userData.firstName)
    await this.lastNameInput.fill(userData.lastName)
    await this.addressInput.fill(userData.address)
    await this.postalCodeInput.fill(userData.postalCode)
    await this.cityInput.fill(userData.city)
    await this.phoneInput.fill(userData.phone)
  }

  async proceedToShipping(): Promise<void> {
    await this.shippingButton.click()
  }

  async proceedToPayment(): Promise<void> {
    await this.paymentButton.click()
  }
}
