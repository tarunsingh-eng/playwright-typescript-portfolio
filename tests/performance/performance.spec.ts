import { AsyncLocalStorage } from 'node:async_hooks';
import {test, expect } from '../fixtures/auth.fixture'
import { request } from 'node:http';


test.beforeEach (  async ({loggedInPage}) => {
    await loggedInPage.waitForSelector('#num1');
})


test('First response in less than 500ms', async({request}) => {
    const   start = Date.now();
    const   res = await request.get('/index.html');
    const   duration = Date.now() - start;

    expect(res.ok()).toBeTruthy();
    expect(duration).toBeLessThan(500); 
    console.log(duration);
})

test('Another performance pass', async ({request}) => {
    const   start = Date.now();
    const   res = await request.get('/index.html');
    const   duration = Date.now() - start;

    expect(res.ok()).toBeTruthy();
    expect(duration).toBeLessThan(100);
    const  message = 'duration is '
    console.log(message + duration);
})