// Base paths
const BASE = 'https://shop.ledger.com'
const PAGES = `${BASE}/pages`
const PRODUCTS = `${BASE}/products`

export const LEDGER_URLS = {
  home: BASE,
  pages: {
    // Products & Comparisons
    ledgerFlex: `${PAGES}/ledger-flex`,
    ledgerStax: `${PAGES}/ledger-stax`,
    ledgerNanoX: `${PAGES}/ledger-nano-x`,
    ledgerNanoSPlus: `${PAGES}/ledger-nano-s-plus`,
    hardwareWallet: `${PAGES}/hardware-wallet`,
    hardwareComparison: `${PAGES}/hardware-wallets-comparison`,
    bitcoinWallet: `${PAGES}/bitcoin-hardware-wallet`,

    // Recovery
    recoverySolutions: `${PAGES}/recovery-solutions`,
    ledgerRecover: `${PAGES}/ledger-recover`,
    recoverTerms: `${PAGES}/ledger-recover-redeem-code-terms-and-conditions`,

    // Legal
    termsAndConditions: `${PAGES}/terms-and-conditions`,
    cookiePolicy: `${PAGES}/cookie-policy`,
    disclaimers: `${PAGES}/disclaimers`,
    websiteTerms: `${PAGES}/website-terms-of-use`,
    giftCardTerms: `${PAGES}/gift-cards-terms-and-conditions`,
    redemptionTerms: `${PAGES}/how-to-redeem-terms-and-conditions`,
  },

  products: {
    // Main Devices
    devices: {
      stax: {
        base: `${PRODUCTS}/ledger-stax`,
        withRecoveryKey: `${PRODUCTS}/ledger-stax/ledger-stax™-+-recovery-key`,
        withRecoveryKeyAlt: `${PRODUCTS}/ledger-stax/ledger-stax™-%2B-recovery-key`,
      },
      nanoX: {
        base: `${PRODUCTS}/ledger-nano-x`,
        onyxBlack: `${PRODUCTS}/ledger-nano-x/onyx-black`,
        btcOrange: `${PRODUCTS}/ledger-nano-x/btc-orange`,
      },
      nanoSPlus: {
        base: `${PRODUCTS}/ledger-nano-s-plus`,
        matteBlack: `${PRODUCTS}/ledger-nano-s-plus/matte-black`,
        btcOrange: `${PRODUCTS}/ledger-nano-s-plus/btc-orange`,
      },
      flex: {
        solanaEdition: `${PRODUCTS}/ledger-flex-solana-edition-50-sol/solana-edition`,
      },
    },

    // Collaborations
    collaborations: {
      stax: {
        alpineF1: `${PRODUCTS}/ledger-stax-alpine-formula-1-team/ledger-stax-x-alpine-formula-1`,
        belvedereMuseum: `${PRODUCTS}/belvedere-museum-ledger-stax/belvedere-museum-x-ledger-stax™-“the-kiss”-limited-edition`,
      },
      nanoX: {
        rtfkt: `${PRODUCTS}/rtfkt-ledger-nano-x/chalk-blade`,
        clayNation: `${PRODUCTS}/ledger-nano-x-clay-nation`,
        theHundreds: `${PRODUCTS}/ledger-nano-x-the-hundreds`,
        wvrps: `${PRODUCTS}/ledger-nano-x-wvrps`,
        fvckrender: `${PRODUCTS}/fvckrender-lvcidia-ledger-nano-x/fvckrender-x-lvcidia-x-ledger-nano-x`,
      },
      flex: {
        pudgyPenguinsBundle: `${PRODUCTS}/pudgy-penguins-ledger-flex-bundle/pudgy-penguins-x-ledger-flex™-bundle`,
        pudgyPenguinsCase: `${PRODUCTS}/pudgy-penguins-ledger-flex-case/pudgy-penguins-x-ledger-flex™-case`,
        monopolyBundle: `${PRODUCTS}/ledger-flex-monopoly-bitcoin-bundle/ledger-flex™-x-monopoly-bitcoin-bundle`,
        magicEdenBundle: `${PRODUCTS}/magic-eden-custom-flex-bundle`,
      },
    },

    // Accessories
    accessories: {
      backup: {
        cryptotagZeus: `${PRODUCTS}/cryptotag-zeus/cryptotag`,
        cryptotagLoki: `${PRODUCTS}/cryptotag-loki`,
        cryptosteel: `${PRODUCTS}/cryptosteel-capsule-solo`,
        billfodl: `${PRODUCTS}/the-billfodl`,
        backupPack: `${PRODUCTS}/ledger-backup-pack`,
      },
      cases: {
        nanoXCase: `${PRODUCTS}/ledger-nano-case/ledger-nano-x-case`,
        nanoXPod: `${PRODUCTS}/ledger-nano-pod/ledger-nano-x-pod`,
        flexMagnetFolio: `${PRODUCTS}/ledger-flex-magnet-folio`,
        flexMagnetFolioCharcoal: `${PRODUCTS}/ledger-flex-magnet-folio/business-charcoal`,
        flexProtectiveCase: `${PRODUCTS}/ledger-flex-protective-case`,
        flexProtectiveCaseOrange: `${PRODUCTS}/ledger-flex-protective-case/bitcoin-orange`,
        staxMagnetShell: `${PRODUCTS}/ledger-stax-magnet-shell`,
        staxMagnetShellOrange: `${PRODUCTS}/ledger-stax-magnet-shell/bitcoin-orange`,
        ambushCase: `${PRODUCTS}/case-ambush-ledger/ambush®-liquid-metal-case`,
      },
      otgKit: `${PRODUCTS}/ledger-otg-kit`,
    },

    // Chargers & Bundles
    bundles: {
      ankerCharger: `${PRODUCTS}/anker-wireless-charger`,
      belkinCharger: `${PRODUCTS}/belkin-boost-charge`,
      belkinChargerBlack: `${PRODUCTS}/belkin-boost-charge/black`,
      familyPackX: `${PRODUCTS}/ledger-nano-x-3pack/ledger-family-pack-x`,
      familyPackSPlus: `${PRODUCTS}/ledger-family-pack-s-plus`,
      giftCard: `${PRODUCTS}/gift-card`,
    },
  },
}
