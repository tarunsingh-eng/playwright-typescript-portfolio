import { test, expect } from '../fixtures/auth.fixture';

test.beforeEach(async ({ loggedInPage }) => {
  await loggedInPage.waitForSelector('#num1');
});


test ('E2E flow 1: login, user calculator, and logout', async ({loggedInPage}) => {
    
    await loggedInPage.fill('#num1','2');
    await loggedInPage.fill('#num2','5');
    await loggedInPage.click('button[onclick="input(\'multiply\')"]');
    await loggedInPage.click('button[onclick="calculate()"]');

    await expect(loggedInPage.locator('#result')).toHaveText('Result: 10');

    await loggedInPage.click('#logoutBtn');

});


