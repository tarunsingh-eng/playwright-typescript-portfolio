import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('/index.html');
});

test('adds two numbers', async ({ page }) => {
  await page.fill('#num1', '2');
  await page.fill('#num2', '3');
  await page.click('button[onclick="input(\'add\')"]');
  await page.click('button[onclick="calculate()"]');

  await expect(page.locator('#result')).toHaveText('Result: 5');
});
