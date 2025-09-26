import { Locator, Page, expect } from '@playwright/test'

import { LEDGER_URLS } from '../../constants/URLS'
import { WebsiteBanner } from '../components/WebsiteBanner/WebsiteBanner'

interface UserData {
  email: string
  firstName: string
  lastName: string
  address: string
  postalCode: string
  city: string
  phone: string
}

export class HardwareWalletPage {
  readonly page: Page
  readonly websiteBanner: WebsiteBanner
  readonly HARDWARE_WALLETS_URL = `${LEDGER_URLS.pages.hardwareWallet}`

  // Page Structure
  readonly mainNav: Locator
  readonly header: Locator
  readonly footer: Locator

  // Hardware Wallet Sections
  readonly hardwareWalletCollection: Locator
  readonly hardwareWalletComparison: Locator
  readonly hardwareWalletExplained: Locator
  readonly secureSeedPhrase: Locator
  readonly howToUseHardwareWallet: Locator
  readonly storageDifferences: Locator
  readonly walletBenefits: Locator
  readonly ledgerLive: Locator
  readonly stayInTouch: Locator

  // Checkout Elements
  readonly flexCartButton: Locator
  readonly ledgerRecoverDeclineOption: Locator
  readonly checkoutButton: Locator
  readonly shippingButton: Locator
  readonly paymentButton: Locator
  readonly standardShippingOption: Locator
  readonly emailInput: Locator
  readonly firstNameInput: Locator
  readonly lastNameInput: Locator
  readonly addressInput: Locator
  readonly postalCodeInput: Locator
  readonly cityInput: Locator
  readonly phoneInput: Locator

  constructor(page: Page) {
    this.page = page
    this.websiteBanner = new WebsiteBanner(page)

    // Page Structure
    this.mainNav = page.locator('nav[aria-label="Main"][data-orientation="horizontal"]')
    this.header = page.locator('header.navigation-safe-space')
    this.footer = page.locator('[data-testid="footer"]')

    // Hardware Wallet Sections
    this.hardwareWalletCollection = page.locator('[data-testid="hardware-wallet-collection"]')
    this.hardwareWalletComparison = page.locator('[data-cs-override-id="block-comparison"]')
    this.hardwareWalletExplained = page.locator('h2.heading-2:has-text("Hardware wallets explained")')
    this.secureSeedPhrase = page.locator('h3.heading-3:has-text("Secure your seed phrase")')
    this.howToUseHardwareWallet = page.locator('[data-testid="features-block"]')
    this.storageDifferences = page.locator('h3.heading-3:has-text("Hardware wallet vs. software wallets vs. crypto exchanges: What\'s the difference?")')
    this.walletBenefits = page.locator('h3.heading-3:has-text("Hardware Wallet benefits")')
    this.ledgerLive = page.locator('h2.heading-1:has-text("Ledger Live: the hardware wallet app")')
    this.stayInTouch = page.locator('h4.heading-4:has-text("Stay in touch")')

    // Checkout Elements
    this.flexCartButton = page.locator('[data-cs-override-id="ledger-flex-atc"]')
    this.ledgerRecoverDeclineOption = page.getByRole('radio', { name: /no coverage/i })
    this.checkoutButton = page.getByRole('button', { name: /checkout/i, exact: true })
    this.shippingButton = page.getByRole('button', { name: /continue to shipping/i })
    this.standardShippingOption = page.getByRole('radio', { name: /standard courier/i })
    this.paymentButton = page.getByRole('button', { name: /continue to payment/i })
    this.emailInput = page.locator('input[name="email"]')
    this.firstNameInput = page.getByRole('textbox', { name: 'First name' })
    this.lastNameInput = page.getByRole('textbox', { name: 'Last name' })
    this.addressInput = page.getByRole('combobox', { name: 'Address' })
    this.postalCodeInput = page.getByRole('textbox', { name: 'Postal code' })
    this.cityInput = page.getByRole('textbox', { name: 'City' })
    this.phoneInput = page.getByRole('textbox', { name: 'Phone' })
  }

  // Navigation
  async goto(): Promise<void> {
    await this.page.goto(this.HARDWARE_WALLETS_URL)
  }

  // Content Verification
  async verifyAllSectionsVisible(): Promise<void> {
    const sections = [
      this.hardwareWalletCollection,
      this.hardwareWalletComparison,
      this.hardwareWalletExplained,
      this.secureSeedPhrase,
      this.howToUseHardwareWallet,
      this.storageDifferences,
      this.walletBenefits,
      this.ledgerLive,
      this.stayInTouch,
    ]

    for (const section of sections) {
      await expect(section).toBeVisible()
    }
  }

  // Checkout Flow
  async addFlexToCart(): Promise<void> {
    await this.flexCartButton.click()
    await expect(this.page.locator('[data-testid="side-drawer"]')).toBeVisible()
  }

  async selectNoCoverageOption(): Promise<void> {
    await this.ledgerRecoverDeclineOption.waitFor({ state: 'visible' })
    await this.ledgerRecoverDeclineOption.click()
  }

  async proceedToCheckout(): Promise<void> {
    await this.checkoutButton.click()
    await expect(this.page).toHaveURL(/checkout/)
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
    await expect(this.standardShippingOption).toBeVisible()
  }

  async selectStandardShipping(): Promise<void> {
    await this.standardShippingOption.click()
  }

  async proceedToPayment(): Promise<void> {
    await this.paymentButton.click()
    await expect(this.page).toHaveURL(/payment/)
  }

  async completeCheckout(userData: UserData): Promise<void> {
    await this.addFlexToCart()
    await this.selectNoCoverageOption()
    await this.proceedToCheckout()
    await this.fillShippingForm(userData)
    await this.proceedToShipping()
    await this.selectStandardShipping()
    await this.proceedToPayment()
  }
}
