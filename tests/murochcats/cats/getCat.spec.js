const {test, expect}  = require('@playwright/test');


test.describe("should check getting cat using it's id", () => {
    test(`should check existing id`, async ({request}) => {
        const id = 1;
        const positiveIdResponse = {
            "name": "Tashenka",
            "age": 5,
            "fur": "red",
            "id": 1
        };
        const response = await request.get(`/cats/${id}`);
        const jsonResponse = await response.json();
        expect(response.ok()).toBeTruthy();
        expect(jsonResponse).toEqual(positiveIdResponse)
    })
    test(`should check incorrect id`, async ({request}) => {
        const id = 90;
        const incorrectIdResponse = `Cat with id ${id} not found`;
        const response = await request.get(`/cats/${id}`);
        const jsonResponse = await response.json();
        expect(response.ok()).toBeFalsy();
        expect(jsonResponse).toEqual(incorrectIdResponse);
    })
})
