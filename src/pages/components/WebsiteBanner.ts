import { Locator, Page } from '@playwright/test'

export class WebsiteBanner {
  private readonly page: Page
  private readonly banner: Locator
  private readonly mainLink: Locator
  private readonly ctaButton: Locator
  // private readonly mobileChevron: Locator

  constructor(page: Page) {
    this.page = page
    this.banner = page.locator('div[data-testid="website-banner"]')
    this.mainLink = this.banner.locator('a:not([data-testid="website-banner-link"])')
    this.ctaButton = this.banner.locator('a[data-testid="website-banner-link"]')
    // this.mobileChevron = this.banner.locator('svg.rtl\\:rotate-180')
  }

  async isVisible(): Promise<boolean> {
    return this.banner.isVisible()
  }

  async clickMainLink(): Promise<void> {
    await this.mainLink.click()
  }

  async clickCTAButton(): Promise<void> {
    await this.ctaButton.click()
  }

  // async getMainMessage(): Promise<string> {
  //   return this.mainLink.locator('span:first-child').textContent()
  // }

  // async getCTAText(): Promise<string> {
  //   return this.ctaButton.locator('span:first-child').textContent()
  // }
}
