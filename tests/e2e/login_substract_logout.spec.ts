import { test, expect} from '../fixtures/auth.fixture';

test.beforeEach( async ({loggedInPage}) => {
    await loggedInPage.waitForSelector('#num1');
});


test ('E2E>Login>substract>logout', async({loggedInPage}) => {

    await loggedInPage.fill('#num1', '5');
    await loggedInPage.fill('#num2', '2');
    await loggedInPage.click('button[onclick="input(\'subtract\')"]');
    await loggedInPage.click('button[onclick="calculate()"]');

    await expect(loggedInPage.locator('#result')).toHaveText('Result: 3');

    await loggedInPage.click('#logoutBtn');
});