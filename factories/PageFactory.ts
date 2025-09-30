import { BasePage } from '../pages/basePage'
import { HardwareWalletPage } from '../pages/HardwareWalletPage/HardwareWalletPage'
import { Page } from '@playwright/test'

export type AvailablePages = 'hardwareWallet' | 'home' | 'cart'

export class PageFactory {
  static getPage(page: Page, pageName: AvailablePages): BasePage {
    switch (pageName) {
      case 'hardwareWallet':
        return new HardwareWalletPage(page)
      default:
        throw new Error(`Page ${pageName} not implemented in PageFactory`)
    }
  }
}
