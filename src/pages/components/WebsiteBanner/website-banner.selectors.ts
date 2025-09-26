export const WebsiteBannerSelectors = {
  banner: 'div[data-testid="website-banner"]',
  mainLink: 'a:not([data-testid="website-banner-link"])',
  ctaButton: 'a[data-testid="website-banner-link"]',
  mainMessage: 'span:first-child',
  ctaText: 'span:first-child',
}
