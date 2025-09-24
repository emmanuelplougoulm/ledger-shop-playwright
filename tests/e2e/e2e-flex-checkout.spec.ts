import { expect, test } from '@playwright/test'

import { HardwareWalletsCheckoutPage } from '../pages/HardwareWalletsCheckoutPage'

test.describe('Ledger Hardware Wallet Checkout Flow', () => {
  test('should complete entire checkout flow', async ({ page }) => {
    const checkoutPage = new HardwareWalletsCheckoutPage(page)

    await test.step('1. Navigate to Hardware Wallets page', async () => {
      await checkoutPage.goto()
      await expect(checkoutPage.page).toHaveURL(/hardware-wallet/)
    })

    await test.step('2. Add Ledger Flex to cart', async () => {
      await checkoutPage.addFlexToCart()
    })

    await test.step('3. Select No Coverage option', async () => {
      await checkoutPage.selectNoCoverageOption()
    })

    await test.step('4. Proceed to checkout', async () => {
      await checkoutPage.proceedToCheckout()
      await expect(checkoutPage.page).toHaveURL(/checkouts/)
    })

    await test.step('5. Fill shipping information form', async () => {
      await checkoutPage.fillInfosForm()
    })

    await test.step('7. Proceed to shipping', async () => {
      await checkoutPage.proceedToShipping()
      await expect(checkoutPage.page).toHaveURL(/shipping/)
    })

    await test.step('6. Select standard shipping option', async () => {
      await checkoutPage.selectStandardShipping()
    })

    await test.step('8. Proceed to payment', async () => {
      await checkoutPage.proceedToPayment()
      await expect(checkoutPage.page).toHaveURL(/payment/)
    })
  })
})
