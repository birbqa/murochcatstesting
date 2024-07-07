const { test, expect } = require('@playwright/test');

const requestBody = {
    "name": "Mur",
    "age": 30,
    "fur": "black",
    "id": 8
}

test('should create cat entity', async ({ request }) => {
    const catCreateResponse = await request.post(`/cats`, {
        data: requestBody
    });
    const cat = await catCreateResponse.json();
    expect(catCreateResponse.ok()).toBeTruthy();
    expect(cat).toEqual(requestBody);

    const getCatResponse = await request.get(`/cats/${requestBody.id}`);
    expect(getCatResponse.ok()).toBeTruthy();
})

test.afterAll(async ({ request }) => {
    const response = await request.delete(`/cats/${requestBody.id}`);
    expect(response.ok()).toBeTruthy();
});


