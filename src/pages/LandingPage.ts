import { Locator, Page } from '@playwright/test'

import { LEDGER_URLS } from '../../constants/URLS'

export class HomePage {
  readonly page: Page
  readonly home: string

  constructor(page: Page) {
    this.page = page
    this.home = LEDGER_URLS.home
  }

  async goto() {
    await this.page.goto(this.home)
  }
}
