import { test, expect } from '@playwright/test';

test.describe('Amazon Search Tests', () => {
  test('should search for a book and verify results', async ({ page }) => {
    // Navigate to Amazon Mexico
    await page.goto('https://www.amazon.com.mx/');

    // Click on the search box
    await page.getByRole('searchbox', { name: 'Buscar en Amazon.com.mx' }).click();

    // Fill the search query
    await page.getByRole('searchbox', { name: 'Buscar en Amazon.com.mx' }).fill('si lo crees lo creas');

    // Click the search button
    await page.getByRole('button', { name: 'Ir', exact: true }).click();

    // Verify the book title appears in results
    await expect(page.getByLabel('Si lo crees, lo creas (edició')).toContainText('Si lo crees, lo creas');

    // Verify the price is visible
    await expect(page.getByRole('link', { name: '$272.75' })).toBeVisible();
  });
});