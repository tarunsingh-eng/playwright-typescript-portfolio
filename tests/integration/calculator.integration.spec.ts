import { test, expect } from '../fixtures/auth.fixture';

test.beforeEach(async ({ loggedInPage }) => {
  // await loggedInPage.goto('/index.html');
  // await loggedInPage.goto('/calculator.html');
  await loggedInPage.waitForSelector('#num1');
});

test('adds two numbers', async ({ loggedInPage }) => {
  await loggedInPage.fill('#num1', '2');
  await loggedInPage.fill('#num2', '3');
  await loggedInPage.click('button[onclick="input(\'add\')"]');
  await loggedInPage.click('button[onclick="calculate()"]');

  await expect(loggedInPage.locator('#result')).toHaveText('Result: 5');
});

test('subtract two numbers', async ({loggedInPage}) => {
  await loggedInPage.fill('#num1', '5');
  await loggedInPage.fill('#num2', '2');
  await loggedInPage.click('button[onclick="input(\'subtract\')"]');
  await loggedInPage.click('button[onclick="calculate()"]');

  await expect.soft(loggedInPage.locator('#result')).toHaveText('Result: 3');
});

test('multiply two numbers', async ({loggedInPage}) => {
  await loggedInPage.fill("#num1", '5');
  await loggedInPage.fill("#num2",'4');
  await loggedInPage.click('button[onclick="input(\'multiply\')"]');
  await loggedInPage.click('button[onclick="calculate()"]');

  await expect.soft(loggedInPage.locator('#result')).toHaveText('Result: 20');
});


test('divide two numbers', async ({loggedInPage}) => {
  await loggedInPage.fill('input[placeholder="Number 1"]','50');
  await loggedInPage.fill('input[placeholder="Number 2"]', '2');
  await loggedInPage.click('button[onclick="input(\'divide\')"]');
  await loggedInPage.click('button[onclick="calculate()"]');

  await expect.soft(loggedInPage.locator('div[id="result"]')).toHaveText('Result: 25');
})

test('Multiple multiply operations + use of clear display button', async ({ loggedInPage }) => {
  await loggedInPage.fill('#num1','30');
  await loggedInPage.fill('#num2','20');
  await loggedInPage.click('button[onclick="input(\'multiply\')"]');
  await loggedInPage.click('button[onclick="calculate()"]');

  await expect.soft(loggedInPage.locator('#result')).toHaveText('Result: 600');

  await loggedInPage.click('button[onclick="clearDisplay()"]');

  await loggedInPage.fill('#num1','40');
  await loggedInPage.fill('#num2','50');
  await loggedInPage.click('button[onclick="input(\'multiply\')"]');
  await loggedInPage.click('button[onclick="calculate()"]');

  await expect.soft(loggedInPage.locator('#result')).toHaveText('Result: 2000');
})

test('multiple operations: add, substract, multiply, divide and clear display', async({loggedInPage})=> {
    await loggedInPage.fill('#num1', '20');
    await loggedInPage.fill('#num2', '2');
    await loggedInPage.click('button[onclick="input(\'add\')"]');
    await loggedInPage.click('button[onclick="calculate()"]');

    await expect(loggedInPage.locator('#result')).toHaveText('Result: 22');
    console.log("Number added");

    await loggedInPage.fill('#num2', '20');
    await loggedInPage.click('button[onclick="input(\'divide\')"]');
    await loggedInPage.click('button[onclick="calculate()"]');

    await expect(loggedInPage.locator('#result')).toHaveText('Result: 1');
    console.log("Number divided");

    await loggedInPage.fill('#num1', '3');
    await loggedInPage.click('button[onclick="input(\'subtract\')"]');
    await loggedInPage.click('button[onclick="calculate()"]')

    await expect(loggedInPage.locator('#result')).toHaveText('Result: -17');
    console.log("Number Substracted");

    await loggedInPage.fill('#num2', '1.5');
    await loggedInPage.click('button[onclick="input(\'multiply\')"]');
    await loggedInPage.click('button[onclick="calculate()"]');

    await expect(loggedInPage.locator('#result')).toHaveText('Result: 4.5');
    console.log("number multiplied")

    await loggedInPage.click('button[onclick="clearDisplay()"]');

    await expect(loggedInPage.locator('#display')).toHaveText('');
    console.log("Display Cleared");
})


test('multiply by result', async ({loggedInPage}) => {

    await loggedInPage.fill('#num1','10');
    await loggedInPage.fill('#num2','300');
    await loggedInPage.click('button[onclick="input(\'multiply\')"]');
    await loggedInPage.click('button[onclick="calculate()"]');

    await expect(loggedInPage.locator('#result')).toHaveText('Result: 3000');

    let resultText: string = (await loggedInPage.locator('#result').textContent()) ?? '';

    await loggedInPage.fill('#num2', resultText.slice(8));
    await loggedInPage.click('button[onclick="calculate()"]');

    await expect(loggedInPage.locator('#result')).toHaveText('Result: 30000');

})


test("add test", async({loggedInPage})=> {
  await loggedInPage.fill('#num1','20');
  await loggedInPage.fill('#num2','10');
  await loggedInPage.click('button[onclick="input(\'add\')"]');
  await loggedInPage.click('button[onclick="calculate()"]');

  await expect(loggedInPage.locator('#result')).toHaveText('Result: 30');

})


test("divide by zero", async ({loggedInPage}) => {
  await loggedInPage.fill('#num1','20');
  await loggedInPage.fill('#num2','0');
  await loggedInPage.click('button[onclick="input(\'divide\')"]');
  await loggedInPage.click('button[onclick="calculate()"]');

  await expect(loggedInPage.locator('#result')).toHaveText('Division by zero');

}
)