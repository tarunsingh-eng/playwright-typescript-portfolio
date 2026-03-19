import {test,expect} from '../fixtures/auth.fixture';

test.beforeEach(async ({loggedInPage})=> {
    await loggedInPage.waitForSelector('#num1');

})

test ('E2E flow 2: login, multiply, and logout', async({ loggedInPage}) => {

    await loggedInPage.fill('#num1', '12');
    await loggedInPage.fill('#num2','100');
    await loggedInPage.click('button[onclick="input(\'multiply\')"]');
    await loggedInPage.click('button[onclick="calculate()"]');

    await expect(loggedInPage.locator('#result')).toHaveText('Result: 1200');

    await loggedInPage.click('#logoutBtn');
    console.log("user logged out");
})