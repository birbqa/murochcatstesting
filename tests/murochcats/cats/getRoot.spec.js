const { test, expect } = require('@playwright/test');

test(`should check the root`, async ({request}) => {
    const rootResponse = "Cats live here!";
    const response = await request.get('');
    const jsonResponse = await response.json();
    expect(response.ok()).toBeTruthy();
    expect(jsonResponse).toEqual(rootResponse)
})