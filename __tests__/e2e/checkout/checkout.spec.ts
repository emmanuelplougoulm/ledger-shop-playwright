import { expect, test } from '@playwright/test'

import { HardwareWalletPage } from '../../../pages/HardwareWalletPage/HardwareWalletPage'
import { InformationPage } from '../../../pages/InformationPage/InformationPage'
import { SideDrawer } from '../../../pages/__components/SIdeDrawer/SideDrawer'

const UserData = {
  email: 'victor@gmail.com',
  firstName: 'victor',
  lastName: 'toto',
  address: '2, rue de la paix',
  postalCode: '75002',
  city: 'Paris',
  phone: '0687654567',
}

test.describe('Hardware Wallet Checkout Flow', () => {
  test('should complete an entire checkout flow', async ({ page }) => {
    const hwPage = new HardwareWalletPage(page)
    const sideDrawer = new SideDrawer(page)
    const infoPage = new InformationPage(page)

    await test.step('1. Navigate to Hardware Wallets page', async () => {
      await hwPage.goto()
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
