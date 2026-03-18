//fixture/auth.fixture.ts
import {test as base,Page}from '@playwright/test';

type MyFixtures= {
    loggedInPage: Page;
};

export const test = base.extend<MyFixtures> ({
    loggedInPage: async ({page}, use) => {
        await page.goto('/index.html');

        await page.fill('#username', 'admin');
        await page.fill('#password', '1234');
        
        await Promise.all([
         page.waitForURL('**/calculator'),
         page.click('#loginBtn'),
        ]);
        await use(page);
        console.log("user logged in");
    },
});

export { expect } from '@playwright/test';