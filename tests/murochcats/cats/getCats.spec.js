const { test, expect } = require('@playwright/test');

test(`should return all cats`, async ({request}) => {
    const catsResponse = [
        {
            "name": "Benya",
            "age": 12,
            "fur": "white",
            "id": 2
        },
        {
            "name": "Monya",
            "age": 6,
            "fur": "black-white",
            "id": 3
        },
        {
            "name": "mur",
            "age": 30,
            "fur": "black",
            "id": 88
        }
    ];
    const response = await request.get('/cats');
    const jsonResponse = await response.json();
    expect(response.ok()).toBeTruthy();
    expect(jsonResponse).toEqual(catsResponse)
})