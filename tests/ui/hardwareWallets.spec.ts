import { expect, test } from "@playwright/test";

import { HardwareWalletsPage } from "./pages/HardwareWalletsPage";

let hwPage: HardwareWalletsPage;

test.beforeEach(async ({ page }) => {
  hwPage = new HardwareWalletsPage(page);
  await hwPage.goto();
});

test.describe("Page Structure Tests", () => {
  test("should display the website banner with two links", async () => {
    await expect(hwPage.websiteBanner).toBeVisible();
    await expect(hwPage.websiteBanner.locator("a")).toHaveCount(2);
  });

  test("should display the main navigation with 6 items", async () => {
    await expect(hwPage.mainNav).toBeVisible();
    await expect(hwPage.mainNav.locator("ul > li > *")).toHaveCount(6);
  });

  test("should display the header with correct title and CTA button", async ({
    page,
  }) => {
    await expect(hwPage.header).toBeVisible();
    await expect(hwPage.header.locator("h1.heading-3")).toHaveText(
      /Hardware Wallet/i
    );
    const ctaButton = page.locator('a[data-cs-override-id="hero-cta"]');
    await expect(ctaButton).toBeVisible();
    await expect(ctaButton).toHaveText(/Buy a Hardware Wallet/i);
  });

  test("should display the footer", async () => {
    await expect(hwPage.footer).toBeVisible();
  });
});

test.describe("Hardware Wallet Sections", () => {
  test("should display the hardware wallet collection section with correct title and 4 product cards", async () => {
    await expect(hwPage.hardwareWalletCollection).toBeVisible();
    await expect(
      hwPage.hardwareWalletCollection.locator("h2.heading-3")
    ).toHaveText(/Ledger Hardware Wallets/i);
    await expect(
      hwPage.hardwareWalletCollection.locator(
        '[data-testid="hardware-wallet-card"]'
      )
    ).toHaveCount(4);
  });

  test("should display the hardware wallet comparison section with correct title", async () => {
    await expect(hwPage.hardwareWalletComparison).toBeVisible();
    await expect(
      hwPage.hardwareWalletComparison.locator("h2.heading-3")
    ).toHaveText(/Ledger Hardware Wallet Comparison/i);
  });

  test("should display the hardware wallet explained section with correct text", async () => {
    await expect(hwPage.hardwareWalletExplained).toBeVisible();
    await expect(hwPage.hardwareWalletExplained).toHaveText(
      /Hardware wallets explained/i
    );
  });

  test("should display the secure seed phrase section with correct text", async () => {
    await expect(hwPage.secureSeedPhrase).toBeVisible();
    await expect(hwPage.secureSeedPhrase).toHaveText(
      /Secure your seed phrase/i
    );
  });

  test("should display the 'How to use a hardware wallet' section with correct title and 3 features", async () => {
    await expect(hwPage.howToUseHardwareWallet).toBeVisible();
    await expect(
      hwPage.howToUseHardwareWallet.locator("h2.heading-3")
    ).toHaveText(/How to use a hardware wallet\?/i);
    await expect(
      hwPage.howToUseHardwareWallet.locator(
        '[data-cs-override-id^="feature-details-"]'
      )
    ).toHaveCount(3);
  });

  test("should display the storage differences section", async () => {
    await expect(hwPage.storageDifferences).toBeVisible();
  });

  test("should display the hardware wallet benefits section", async () => {
    await expect(hwPage.walletBenefits).toBeVisible();
  });
});

test.describe("Additional Sections", () => {
  test("should display the Ledger Live section", async () => {
    await expect(hwPage.ledgerLive).toBeVisible();
  });

  test("should display the Stay in Touch section", async () => {
    await expect(hwPage.stayInTouch).toBeVisible();
  });
});
