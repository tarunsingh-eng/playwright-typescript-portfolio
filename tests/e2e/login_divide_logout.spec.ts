import { test, expect} from '../fixtures/auth.fixture';

test.beforeEach(async ({ loggedInPage }) => {
    await loggedInPage.waitForSelector('#num1');
});

test ('login, divide and logout', async({ loggedInPage}) => {

    await loggedInPage.fill('#num1', '6');
    await loggedInPage.fill('#num2', '2');
    await loggedInPage.click('button[onclick="input(\'divide\')"]');
    await loggedInPage.click('button[onclick="calculate()"]');

    await expect(loggedInPage.locator('#result')).toHaveText("Result: 3");

    await loggedInPage.click('#logoutBtn');
    console.log("calculate-divide>logged out");
})