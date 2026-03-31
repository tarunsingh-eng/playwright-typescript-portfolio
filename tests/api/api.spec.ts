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

