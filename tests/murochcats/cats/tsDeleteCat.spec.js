const { test, expect } = require("@playwright/test");

test("Delete cat with it's id", async ({ request }) => {
    const response = await request.delete(`/cats/17`, {});
    console.log(await response.json());
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
});