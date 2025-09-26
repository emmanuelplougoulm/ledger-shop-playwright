import { Page } from '@playwright/test'

export const WebsiteBannerSelectors = {
  banner: (page: Page) => page.getByTestId('website-banner'),
  mainLink: (page: Page) => page.getByRole('link').filter({ hasText: /review and sign transactions/i }),
  ctaButton: (page: Page) => page.getByRole('link').filter({ hasText: /discover now/i }),
}
