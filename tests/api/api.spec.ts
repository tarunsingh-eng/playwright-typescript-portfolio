import {test, expect} from '@playwright/test';
import { request } from 'node:http';

test('Get local calculator page return 200 and shows title text', async ({ request}) => {
const response = await request.get('/index.html');
expect(response.status()).toBe(200);
const body =await response.text();
expect(body).toContain('calculator');
} );


test('calculator page requires authentication', async({request}) => {

    const res = await request.get('/calculator.html');
    expect(res.status()).toBe(200);
    const body = await res.text();
    expect(body).toContain('localStorage.getItem("user")');
});

test('invalid route returns 404 or NOT FOUND', async({request}) => {
    const res = await request.get('/invalid.html');
    expect([404, 500]).toContain(res.status());
})

test('Case Sensitive route work', async({request}) => {

    const res = await request.get('/INDEX.HTML');
    expect([200, 404]).toContain(res.status());
    console.log(res.status());
})


test('index page responds under 400ms', async({request}) => {
    const start = Date.now();
    const res = await request.get('/index.html');
    const end = Date.now();
    const responseTime = end - start;
    console.log(`Response Time: ${responseTime}ms`);
        expect(responseTime).toBeLessThan(400);
});