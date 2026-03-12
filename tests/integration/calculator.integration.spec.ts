import { test, expect } from '@playwright/test';


test.beforeEach(async ({ page }) => {
  await page.goto('/index.html');
  await page.waitForSelector('#num1');
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

test('Multiple multiply operations + use of clear display button', async ({ page }) => {
  await page.fill('#num1','30');
  await page.fill('#num2','20');
  await page.click('button[onclick="input(\'multiply\')"]');
  await page.click('button[onclick="calculate()"]');

  await expect.soft(page.locator('#result')).toHaveText('Result: 600');

  await page.click('button[onclick="clearDisplay()"]');

  await page.fill('#num1','40');
  await page.fill('#num2','50');
  await page.click('button[onclick="input(\'multiply\')"]');
  await page.click('button[onclick="calculate()"]');

  await expect.soft(page.locator('#result')).toHaveText('Result: 2000');
})

test('multiple operations: add, substract, multiply, divide and clear display', async({page})=> {
    await page.fill('#num1', '20');
    await page.fill('#num2', '2');
    await page.click('button[onclick="input(\'add\')"]');
    await page.click('button[onclick="calculate()"]');

    await expect(page.locator('#result')).toHaveText('Result: 22');
    console.log("Number added");

    await page.fill('#num2', '20');
    await page.click('button[onclick="input(\'divide\')"]');
    await page.click('button[onclick="calculate()"]');

    await expect(page.locator('#result')).toHaveText('Result: 1');
    console.log("Number divided");

    await page.fill('#num1', '3');
    await page.click('button[onclick="input(\'subtract\')"]');
    await page.click('button[onclick="calculate()"]')

    await expect(page.locator('#result')).toHaveText('Result: -17');
    console.log("Number Substracted");

    await page.fill('#num2', '1.5');
    await page.click('button[onclick="input(\'multiply\')"]');
    await page.click('button[onclick="calculate()"]');

    await expect(page.locator('#result')).toHaveText('Result: 4.5');
    console.log("number multiplied")

    await page.click('button[onclick="clearDisplay()"]');

    await expect(page.locator('#display')).toHaveText('');
    console.log("Display Cleared");
})


test('multiply by result', async ({page}) => {

    await page.fill('#num1','10');
    await page.fill('#num2','300');
    await page.click('button[onclick="input(\'multiply\')"]');
    await page.click('button[onclick="calculate()"]');

    await expect(page.locator('#result')).toHaveText('Result: 3000');

    let str1:string = await page.locator('#result').textContent();

    await page.fill('#num2', str1.slice(9));
    await page.click('button[onclick="calculate()"]');

    await expect(page.locator('#result')).toHaveText('Result: 30000');

})