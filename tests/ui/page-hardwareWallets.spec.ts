import { expect, test } from "@playwright/test";

// page sections breakdown

// 1- website banner
test("page banner is visible", async ({ page }) => {
  await page.goto(
    "https://shop.ledger.com/pages/hardware-wallet#hardware-wallet-collection"
  );

  const websiteBanner = page.locator("data-testid=website-banner");

  await expect(websiteBanner).toBeVisible();
});

// 2- nav
test("page nav is visible", async ({ page }) => {
  await page.goto(
    "https://shop.ledger.com/pages/hardware-wallet#hardware-wallet-collection"
  );

  const mainNav = await page.locator(
    'nav[aria-label="Main"][data-orientation="horizontal"]'
  );

  await expect(mainNav).toBeVisible();
});

// 3- Header
test("page header is visible", async ({ page }) => {
  await page.goto(
    "https://shop.ledger.com/pages/hardware-wallet#hardware-wallet-collection"
  );

  const header = await page.locator("header.navigation-safe-space");

  await expect(header).toBeVisible();
});

// 4- section / hardware wallet collection
test("section / hardware wallet collection is visible", async ({ page }) => {
  await page.goto(
    "https://shop.ledger.com/pages/hardware-wallet#hardware-wallet-collection"
  );

  const hardwareWalletSection = await page.locator(
    '[data-testid="hardware-wallet-collection"]'
  );

  await expect(hardwareWalletSection).toBeVisible();
});

// 5- section / hardware wallet comparison
test("section / hardware wallet comparison is visible", async ({ page }) => {
  await page.goto(
    "https://shop.ledger.com/pages/hardware-wallet#hardware-wallet-collection"
  );

  const hardwareWalletComparisonSection = await page.locator(
    "[data-cs-override-id=block-comparison]"
  );

  await expect(hardwareWalletComparisonSection).toBeVisible();
});

// 6- section / hardware wallet explained

test("section / hardware wallet explained", async ({ page }) => {
  await page.goto(
    "https://shop.ledger.com/pages/hardware-wallet#hardware-wallet-collection"
  );

  const hardwareWalletExplainedSection = await page.locator(
    'h2.heading-2:has-text("Hardware wallets explained")'
  );

  await expect(hardwareWalletExplainedSection).toBeVisible();
});

// 7- section / secure seed phrase
test("section / secure seed phrase", async ({ page }) => {
  await page.goto(
    "https://shop.ledger.com/pages/hardware-wallet#hardware-wallet-collection"
  );

  const secureSeedPhraseSection = await page.locator(
    'h3.heading-3:has-text("Secure your seed phrase")'
  );

  await expect(secureSeedPhraseSection).toBeVisible();
});

// 8- section / how to use hardware wallet
test("section / how to use hardware wallet", async ({ page }) => {
  await page.goto(
    "https://shop.ledger.com/pages/hardware-wallet#hardware-wallet-collection"
  );

  const howToUseSection = await page.locator(
    'h2.heading-3:has-text("How to use a hardware wallet?")'
  );

  await expect(howToUseSection).toBeVisible();
});

// 9- section / storage differences explained
test("section / storage differences explained", async ({ page }) => {
  await page.goto(
    "https://shop.ledger.com/pages/hardware-wallet#hardware-wallet-collection"
  );

  const storageDifferencesSection = await page.locator(
    'h3.heading-3:has-text("Hardware wallet vs. software wallets vs. crypto exchanges: What\'s the difference?")'
  );

  await expect(storageDifferencesSection).toBeVisible();
});

// 10- section / hardware wallet benefits
test("section / hardware wallet benefits", async ({ page }) => {
  await page.goto(
    "https://shop.ledger.com/pages/hardware-wallet#hardware-wallet-collection"
  );

  const walletBenefitsSection = await page.locator(
    'h3.heading-3:has-text("Hardware Wallet benefits")'
  );

  await expect(walletBenefitsSection).toBeVisible();
});

// 11- section / Ledger live
test("section / Ledger live", async ({ page }) => {
  await page.goto(
    "https://shop.ledger.com/pages/hardware-wallet#hardware-wallet-collection"
  );

  const ledgerLiveSection = await page.locator(
    'h2.heading-1:has-text("Ledger Live: the hardware wallet app")'
  );

  await expect(ledgerLiveSection).toBeVisible();
});

// 12- section / stay in touch
test("section / stay in touch", async ({ page }) => {
  await page.goto(
    "https://shop.ledger.com/pages/hardware-wallet#hardware-wallet-collection"
  );

  const stayInTouchSection = await page.locator(
    'h4.heading-4:has-text("Stay in touch")'
  );

  await expect(stayInTouchSection).toBeVisible();
});

// await page.locator('a[href="mailto:media@ledger.com"]').click();

// 13- footer
test("footer", async ({ page }) => {
  await page.goto(
    "https://shop.ledger.com/pages/hardware-wallet#hardware-wallet-collection"
  );

  const footer = await page.locator("data-testid=footer");

  await expect(footer).toBeVisible();
});
