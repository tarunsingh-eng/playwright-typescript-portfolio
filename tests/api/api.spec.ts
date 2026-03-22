import {test, expect} from '@playwright/test';

test('Get local calculator page return 200 and shows title text', async ({ request}) => {

const response = await request.get('/index.html');

expect(response.status()).toBe(200);

const body =await response.text();
expect(body).toContain('calculator');
} );