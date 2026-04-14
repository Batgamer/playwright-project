import { test } from '@playwright/test';
import { HomePage } from '../../pages/homePage';
import { SearchResultsPage } from '../../pages/searchResultsPage';

test('Buscar Xbox Series S en Amazon', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.goto();
  await homePage.search('xbox series s');

  const searchResultsPage = new SearchResultsPage(page);
  await searchResultsPage.expectProductLinkVisible('Consola Xbox Series S 512GB');
  await searchResultsPage.expectProductLinkVisible('Xbox Series S', true, 1);
});
