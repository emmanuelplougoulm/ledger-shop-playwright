import { expect, test } from '@playwright/test'

import { HardwareWalletPage } from '../../../pages/HardwareWalletPage/HardwareWalletPage'
import { InformationPage } from '../../../pages/InformationPage/InformationPage'
import { LEDGER_URLS } from '../../../constants/URLS'
import { PageFactory } from '../../../factories/PageFactory'
import { SideDrawer } from '../../../pages/__components/SIdeDrawer/SideDrawer'
import { UserBuilder } from '../../../utils/testDataBuilder'

test.describe('Hardware Wallet Checkout Flow', { tag: '@e2e' }, () => {
  test('should complete an entire checkout flow', async ({ page }) => {
    const hwPage = PageFactory.getPage(page, 'hardwareWallet') as HardwareWalletPage

    // const hwPage = new HardwareWalletPage(page)
    const sideDrawer = new SideDrawer(page)
    const infoPage = new InformationPage(page)

    await test.step('1. Navigate to Hardware Wallets page', async () => {
      await hwPage.navigate(LEDGER_URLS.pages.hardwareWallet)
      await expect(page).toHaveURL(/hardware-wallet/)
    })

    await test.step('2. Add Ledger Flex to cart', async () => {
      await hwPage.addFlexToCart()
    })

    await test.step('3. Select No Coverage option', async () => {
      await sideDrawer.selectNoCoverageOption()
    })

    await test.step('4. Continue to checkout', async () => {
      await sideDrawer.continueToCheckout()
      await expect(page).toHaveURL(/information/)
    })

    await test.step('5. Fill shipping information form', async () => {
      const UserData = new UserBuilder()
        .withFirstname('victor')
        .withLastname('toto')
        .withEmail('victor@gmail.com')
        .withAddress('2, rue de la paix')
        .withPostalCode('75002')
        .withCity('Paris')
        .withPhone('0687654567')
        .build()

      await infoPage.fillShippingForm(UserData)
    })

    await test.step('6. Proceed to shipping', async () => {
      await infoPage.proceedToShipping()
      await expect(page).toHaveURL(/shipping/)
    })

    await test.step('7. Proceed to payment', async () => {
      await infoPage.proceedToPayment()
      await expect(page).toHaveURL(/payment/)
    })
  })
})
