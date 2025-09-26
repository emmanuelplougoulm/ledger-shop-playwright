import { Locator, Page } from '@playwright/test'

import { WebsiteBannerSelectors as selectors } from './website-banner.selectors.ts'

export class WebsiteBanner {
  private readonly page: Page
  private readonly banner: Locator
  private readonly mainLink: Locator
  private readonly ctaButton: Locator

  constructor(page: Page) {
    this.page = page
    this.banner = selectors.banner(page)
    this.mainLink = selectors.mainLink(page)
    this.ctaButton = selectors.ctaButton(page)
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
