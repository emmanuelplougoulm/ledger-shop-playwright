import { expect, test } from "@playwright/test";

import { HardwareWalletsPage } from "./pages/HardwareWalletsPage";

let hwPage: HardwareWalletsPage;

test.beforeEach(async ({ page }) => {
  hwPage = new HardwareWalletsPage(page);
  await hwPage.goto();
});

test.describe("Page Structure Tests", () => {
  test("page banner is visible and contains two links", async () => {
    await expect(hwPage.websiteBanner).toBeVisible();
    await expect(hwPage.websiteBanner.locator("a")).toHaveCount(2);
  });

  test("page nav is visible and contains expected items", async () => {
    await expect(hwPage.mainNav).toBeVisible();
    await expect(hwPage.mainNav.locator("ul > li > *")).toHaveCount(6);
  });

  test("page header is visible displays correct title and CTA button", async ({
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

  test("footer", async () => {
    await expect(hwPage.footer).toBeVisible();
  });
});

test.describe("Hardware Wallet Sections", () => {
  test("section / hardware wallet collection section displays correct title and 4 cards", async () => {
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

  test("section / hardware wallet comparison section displays correct title ", async () => {
    await expect(hwPage.hardwareWalletComparison).toBeVisible();
    await expect(
      hwPage.hardwareWalletComparison.locator("h2.heading-3")
    ).toHaveText(/Ledger Hardware Wallet Comparison/i);
  });

  test("section / hardware wallet explained", async () => {
    await expect(hwPage.hardwareWalletExplained).toBeVisible();
    await expect(hwPage.hardwareWalletExplained).toHaveText(
      /Hardware wallets explained/i
    );
  });

  test("section / secure seed phrase", async () => {
    await expect(hwPage.secureSeedPhrase).toBeVisible();
    await expect(hwPage.secureSeedPhrase).toHaveText(
      /Secure your seed phrase/i
    );
  });

  test("section / how to use hardware wallet is visible, displays correct title and 3 features", async () => {
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

  test("section / storage differences explained", async () => {
    await expect(hwPage.storageDifferences).toBeVisible();
  });

  test("section / hardware wallet benefits", async () => {
    await expect(hwPage.walletBenefits).toBeVisible();
  });
});

test.describe("Additional Sections", () => {
  test("section / Ledger live", async () => {
    await expect(hwPage.ledgerLive).toBeVisible();
  });

  test("section / stay in touch", async () => {
    await expect(hwPage.stayInTouch).toBeVisible();
  });
});
