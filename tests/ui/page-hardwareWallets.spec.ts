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
  test("page banner is visible and contains two links", async ({ page }) => {
    const websiteBanner = page.locator(SELECTORS.websiteBanner);

    await expect(websiteBanner).toBeVisible();
    const links = websiteBanner.locator("a");
    await expect(links).toHaveCount(2);
  });

  test("page nav is visible and contains expected items", async ({ page }) => {
    const mainNav = await page.locator(SELECTORS.mainNav);
    await expect(mainNav).toBeVisible();

    const navItems = mainNav.locator("ul > li > *");
    await expect(navItems).toHaveCount(6);
  });

  test("page header is visible displays correct title and CTA button", async ({
    page,
  }) => {
    const header = await page.locator(SELECTORS.header);

    await expect(header).toBeVisible();

    const headerTitle = header.locator("h1.heading-3");
    await expect(headerTitle).toHaveText(/Hardware Wallet/i);

    const ctaButton = page.locator('a[data-cs-override-id="hero-cta"]');
    await expect(ctaButton).toBeVisible();
    await expect(ctaButton).toHaveText(/Buy a Hardware Wallet/i);
  });
  test("footer", async ({ page }) => {
    const footer = await page.locator(SELECTORS.footer);

    await expect(footer).toBeVisible();
  });
});

test.describe("Hardware Wallet Sections", () => {
  test("section / hardware wallet collection section displays correct title and 4 cards", async ({
    page,
  }) => {
    const hardwareWalletSection = await page.locator(
      SELECTORS.hardwareWalletCollection
    );
    await expect(hardwareWalletSection).toBeVisible();

    const sectionTitle = hardwareWalletSection.locator("h2.heading-3");
    await expect(sectionTitle).toHaveText(/Ledger Hardware Wallets/i);

    const cards = hardwareWalletSection.locator(
      '[data-testid="hardware-wallet-card"]'
    );
    await expect(cards).toHaveCount(4);
  });
  test("section / hardware wallet comparison section displays correct title ", async ({
    page,
  }) => {
    const comparisonSection = page.locator(SELECTORS.hardwareWalletComparison);
    await expect(comparisonSection).toBeVisible();

    const sectionTitle = comparisonSection.locator("h2.heading-3");
    await expect(sectionTitle).toHaveText(/Ledger Hardware Wallet Comparison/i);
  });

  test("section / hardware wallet explained", async ({ page }) => {
    const hardwareWalletExplainedSection = await page.locator(
      SELECTORS.hardwareWalletExplained
    );
    await expect(hardwareWalletExplainedSection).toBeVisible();

    await expect(hardwareWalletExplainedSection).toHaveText(
      /Hardware wallets explained/i
    );
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
