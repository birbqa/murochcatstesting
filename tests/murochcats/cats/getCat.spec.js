const { test, expect } = require("@playwright/test");

test("Get cat with it's id", async ({ request }) => {
    const response = await request.get(`/cats/4`, {});
    console.log(await response.json());
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    expect(response.body.id === 4);
});