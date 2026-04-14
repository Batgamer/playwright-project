import { Page, expect } from '@playwright/test';

export class SearchResultsPage {
  constructor(private page: Page) {}

  async expectProductLinkVisible(name: string, exact?: boolean, nth?: number) {
    let locator = this.page.getByRole('link', { name });
    if (exact) {
      locator = locator.filter({ hasText: name });
    }
    if (nth !== undefined) {
      locator = locator.nth(nth);
    }
    await expect(locator).toBeVisible();
  }
}