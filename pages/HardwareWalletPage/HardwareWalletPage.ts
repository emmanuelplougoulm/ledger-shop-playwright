import { Locator, Page, expect } from '@playwright/test'

import { LEDGER_URLS } from '../../constants/URLS'
import { WebsiteBanner } from '../__components/WebsiteBanner/WebsiteBanner'

export class HardwareWalletPage {
  readonly page: Page
  readonly websiteBanner: WebsiteBanner
  readonly HARDWARE_WALLETS_URL = `${LEDGER_URLS.pages.hardwareWallet}`

  readonly mainNav: Locator
  readonly header: Locator
  readonly footer: Locator

  // Sections
  readonly hardwareWalletCollection: Locator
  readonly hardwareWalletComparison: Locator
  readonly hardwareWalletExplained: Locator
  readonly secureSeedPhrase: Locator
  readonly howToUseHardwareWallet: Locator
  readonly storageDifferences: Locator
  readonly walletBenefits: Locator
  readonly ledgerLive: Locator
  readonly stayInTouch: Locator

  readonly flexCartButton: Locator

  constructor(page: Page) {
    this.page = page
    this.websiteBanner = new WebsiteBanner(page)

    this.mainNav = page.locator('nav[aria-label="Main"][data-orientation="horizontal"]')
    this.header = page.locator('header.navigation-safe-space')
    this.footer = page.locator('[data-testid="footer"]')

    // Sections
    this.hardwareWalletCollection = page.locator('[data-testid="hardware-wallet-collection"]')
    this.hardwareWalletComparison = page.locator('[data-cs-override-id="block-comparison"]')
    this.hardwareWalletExplained = page.locator('h2.heading-2:has-text("Hardware wallets explained")')
    this.secureSeedPhrase = page.locator('h3.heading-3:has-text("Secure your seed phrase")')
    this.howToUseHardwareWallet = page.locator('[data-testid="features-block"]')
    this.storageDifferences = page.locator('h3.heading-3:has-text("Hardware wallet vs. software wallets vs. crypto exchanges: What\'s the difference?")')
    this.walletBenefits = page.locator('h3.heading-3:has-text("Hardware Wallet benefits")')
    this.ledgerLive = page.locator('h2.heading-1:has-text("Ledger Live: the hardware wallet app")')
    this.stayInTouch = page.locator('h4.heading-4:has-text("Stay in touch")')

    this.flexCartButton = page.getByTestId('hardware-wallet-collection').getByRole('button', { name: 'Add to cart' }).nth(2)
  }

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

  async addFlexToCart(): Promise<void> {
    await this.flexCartButton.click()
    await expect(this.page.locator('[data-testid="side-drawer"]')).toBeVisible()
  }
}
