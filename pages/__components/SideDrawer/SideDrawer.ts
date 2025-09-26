import { Locator, Page, expect } from '@playwright/test'

export class SideDrawer {
  readonly page: Page
  readonly SideDrawer: Locator
  readonly ledgerRecoverDeclineOption: Locator
  readonly checkoutButton: Locator

  constructor(page: Page) {
    this.page = page
    this.SideDrawer = page.locator('[data-testid="side-drawer"]')

    this.ledgerRecoverDeclineOption = page.getByTestId('ts-ledger-recover-decline')
    this.checkoutButton = page.getByRole('button', { name: /checkout/i, exact: true })
  }

  async selectNoCoverageOption(): Promise<void> {
    await this.ledgerRecoverDeclineOption.waitFor({ state: 'visible' })
    await this.ledgerRecoverDeclineOption.click()
  }

  async continueToCheckout(): Promise<void> {
    await this.checkoutButton.click()
    await expect(this.page).toHaveURL(/checkout/)
  }
}
