import { expect, test } from "@playwright/test";

const LEDGER_SHOP_URL =
  "https://shop.ledger.com/pages/hardware-wallet#hardware-wallet-collection";

const SELECTORS = {
  // Page Structure
  websiteBanner: "data-testid=website-banner",
  mainNav: 'nav[aria-label="Main"][data-orientation="horizontal"]',
  header: "header.navigation-safe-space",
  footer: "data-testid=footer",

  // Hardware Wallet Sections
  hardwareWalletCollection: '[data-testid="hardware-wallet-collection"]',
  hardwareWalletComparison: "[data-cs-override-id=block-comparison]",
  hardwareWalletExplained:
    'h2.heading-2:has-text("Hardware wallets explained")',
  secureSeedPhrase: 'h3.heading-3:has-text("Secure your seed phrase")',
  howToUseHardwareWallet:
    'h2.heading-3:has-text("How to use a hardware wallet?")',
  storageDifferences:
    'h3.heading-3:has-text("Hardware wallet vs. software wallets vs. crypto exchanges: What\'s the difference?")',
  walletBenefits: 'h3.heading-3:has-text("Hardware Wallet benefits")',

  // Additional Sections
  ledgerLive: 'h2.heading-1:has-text("Ledger Live: the hardware wallet app")',
  stayInTouch: 'h4.heading-4:has-text("Stay in touch")',
};

test.beforeEach(async ({ page }) => {
  await page.goto(LEDGER_SHOP_URL);
});

test.describe("Page Structure Tests", () => {
  // 1- website banner
  test("page banner is visible", async ({ page }) => {
    const websiteBanner = page.locator(SELECTORS.websiteBanner);

    await expect(websiteBanner).toBeVisible();
  });

  // 2- Navigation
  test("page nav is visible", async ({ page }) => {
    const mainNav = await page.locator(SELECTORS.mainNav);

    await expect(mainNav).toBeVisible();
  });

  // 3- Header
  test("page header is visible", async ({ page }) => {
    const header = await page.locator(SELECTORS.header);

    await expect(header).toBeVisible();
  });

  // 13- footer
  test("footer", async ({ page }) => {
    const footer = await page.locator(SELECTORS.footer);

    await expect(footer).toBeVisible();
  });
});

test.describe("Hardware Wallet Sections", () => {
  // 4- section / hardware wallet collection
  test("section / hardware wallet collection is visible", async ({ page }) => {
    const hardwareWalletSection = await page.locator(
      SELECTORS.hardwareWalletCollection
    );

    await expect(hardwareWalletSection).toBeVisible();
  });

  // 5- section / hardware wallet comparison
  test("section / hardware wallet comparison is visible", async ({ page }) => {
    const hardwareWalletComparisonSection = await page.locator(
      SELECTORS.hardwareWalletComparison
    );

    await expect(hardwareWalletComparisonSection).toBeVisible();
  });

  // 6- section / hardware wallet explained
  test("section / hardware wallet explained", async ({ page }) => {
    const hardwareWalletExplainedSection = await page.locator(
      SELECTORS.hardwareWalletExplained
    );

    await expect(hardwareWalletExplainedSection).toBeVisible();
  });

  // 7- section / secure seed phrase
  test("section / secure seed phrase", async ({ page }) => {
    const secureSeedPhraseSection = await page.locator(
      SELECTORS.secureSeedPhrase
    );

    await expect(secureSeedPhraseSection).toBeVisible();
  });

  // 8- section / how to use hardware wallet
  test("section / how to use hardware wallet", async ({ page }) => {
    const howToUseSection = await page.locator(
      SELECTORS.howToUseHardwareWallet
    );

    await expect(howToUseSection).toBeVisible();
  });

  // 9- section / storage differences explained
  test("section / storage differences explained", async ({ page }) => {
    const storageDifferencesSection = await page.locator(
      SELECTORS.storageDifferences
    );

    await expect(storageDifferencesSection).toBeVisible();
  });

  // 10- section / hardware wallet benefits
  test("section / hardware wallet benefits", async ({ page }) => {
    const walletBenefitsSection = await page.locator(SELECTORS.walletBenefits);

    await expect(walletBenefitsSection).toBeVisible();
  });
});

test.describe("Additional Sections", () => {
  // 11- section / Ledger live
  test("section / Ledger live", async ({ page }) => {
    const ledgerLiveSection = await page.locator(SELECTORS.ledgerLive);

    await expect(ledgerLiveSection).toBeVisible();
  });

  // 12- section / stay in touch
  test("section / stay in touch", async ({ page }) => {
    const stayInTouchSection = await page.locator(SELECTORS.stayInTouch);

    await expect(stayInTouchSection).toBeVisible();
  });

  // await page.locator('a[href="mailto:media@ledger.com"]').click();
});
