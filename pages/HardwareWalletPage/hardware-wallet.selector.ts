import { Page } from '@playwright/test'

export const HardwareWalletSelectors = {
  mainNav: (page: Page) => page.getByRole('navigation', { name: 'Main' }),
  header: (page: Page) => page.locator('header.navigation-safe-space'),
  footer: (page: Page) => page.getByTestId('footer'),

  sections: {
    collection: (page: Page) => page.getByTestId('hardware-wallet-collection'),
    comparison: (page: Page) => page.locator('[data-cs-override-id="block-comparison"]'),
    explained: (page: Page) => page.getByRole('heading', { name: 'Hardware wallets explained', level: 2 }),
    secureSeedPhrase: (page: Page) => page.getByRole('heading', { name: 'Secure your seed phrase', level: 3 }),
    howToUse: (page: Page) => page.getByTestId('features-block'),
    storageDifferences: (page: Page) =>
      page.getByRole('heading', {
        name: /Hardware wallet vs\. software wallets vs\. crypto exchanges: What's the difference\?/i,
        level: 3,
      }),
    benefits: (page: Page) => page.getByRole('heading', { name: 'Hardware Wallet benefits', level: 3 }),
    ledgerLive: (page: Page) => page.getByRole('heading', { name: 'Ledger Live: the hardware wallet app', level: 1 }),
    stayInTouch: (page: Page) => page.getByRole('heading', { name: 'Stay in touch', level: 4 }),
  },

  checkout: {
    flexCartButton: (page: Page) => page.getByTestId('hardware-wallet-collection').getByRole('button', { name: 'Add to cart' }).nth(2),
    recoverDeclineOption: (page: Page) => page.getByRole('radio').filter({ hasText: /no coverage/i }),
    checkoutButton: (page: Page) => page.getByRole('button', { name: /checkout/i, exact: true }),
    shippingButton: (page: Page) => page.getByRole('button', { name: /continue to shipping/i }),
    standardShippingOption: (page: Page) => page.getByRole('radio').filter({ hasText: /standard courier/i }),
    paymentButton: (page: Page) => page.getByRole('button', { name: /continue to payment/i }),
    // emailInput: (page: Page) => page.getByLabelText('Email'),
    // firstNameInput: (page: Page) => page.getByLabelText('First name'),
    // lastNameInput: (page: Page) => page.getByLabelText('Last name'),
    // addressInput: (page: Page) => page.getByLabelText('Address'),
    // postalCodeInput: (page: Page) => page.getByLabelText('Postal code'),
    // cityInput: (page: Page) => page.getByLabelText('City'),
    // phoneInput: (page: Page) => page.getByLabelText('Phone'),
  },
}
