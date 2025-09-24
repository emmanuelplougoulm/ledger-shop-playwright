import { Locator, Page } from '@playwright/test'

import { LEDGER_SHOP_BASE_URL } from '../../constants'

export class HardwareWalletsPage {
    readonly page: Page

    readonly HARDWARE_WALLETS_URL = `${LEDGER_SHOP_BASE_URL}/pages/hardware-wallet#hardware-wallet-collection`

    // Page Structure
    readonly websiteBanner: Locator
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

    // Additional Sections
    readonly ledgerLive: Locator
    readonly stayInTouch: Locator

    constructor(page: Page) {
        this.page = page
        this.websiteBanner = page.locator('[data-testid="website-banner"]')
        this.mainNav = page.locator('nav[aria-label="Main"][data-orientation="horizontal"]')
        this.header = page.locator('header.navigation-safe-space')
        this.footer = page.locator('[data-testid="footer"]')
        this.hardwareWalletCollection = page.locator('[data-testid="hardware-wallet-collection"]')
        this.hardwareWalletComparison = page.locator('[data-cs-override-id=block-comparison]')
        this.hardwareWalletExplained = page.locator('h2.heading-2:has-text("Hardware wallets explained")')
        this.secureSeedPhrase = page.locator('h3.heading-3:has-text("Secure your seed phrase")')
        this.howToUseHardwareWallet = page.locator('[data-testid="features-block"]')
        this.storageDifferences = page.locator('h3.heading-3:has-text("Hardware wallet vs. software wallets vs. crypto exchanges: What\'s the difference?")')
        this.walletBenefits = page.locator('h3.heading-3:has-text("Hardware Wallet benefits")')

        this.ledgerLive = page.locator('h2.heading-1:has-text("Ledger Live: the hardware wallet app")')
        this.stayInTouch = page.locator('h4.heading-4:has-text("Stay in touch")')
    }

    async goto() {
        await this.page.goto(this.HARDWARE_WALLETS_URL)
    }
}
