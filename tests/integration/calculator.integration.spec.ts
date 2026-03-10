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

test('substract two numbers', async ({page}) => {
  await page.fill('#num1', '5');
  await page.fill('#num2', '2');
  await page.click('button[onclick="input(\'subtract\')"]');
  await page.click('button[onclick="calculate()"]');

  await expect.soft(page.locator('#result')).toHaveText('Result: 3');
});

test('multiply two numbers', async ({page}) => {
  await page.fill("#num1", '5');
  await page.fill("#num2",'4');
  await page.click('button[onclick="input(\'multiply\')"]');
  await page.click('button[onclick="calculate()"]');

  await expect.soft(page.locator('#result')).toHaveText('Result: 20');
});


test('devide two numbers', async ({page}) => {
  await page.fill('input[placeholder="Number 1"]','50');
  await page.fill('input[placeholder="Number 2"]', '2');
  await page.click('button[onclick="input(\'divide\')"]');
  await page.click('button[onclick="calculate()"]');

  await expect.soft(page.locator('div[id="result"]')).toHaveText('Result: 25');
})