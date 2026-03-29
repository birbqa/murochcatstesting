const { test, expect } = require('@playwright/test');

const requestBody = {
    "name": "Mur",
    "age": 30,
    "fur": "black",
    "id": 8
}
test.describe('should check adding a cat', () => {
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
    test('should check name field validation',  async ({ request }) => {
        const nameFieldValidationRequest = {
            "name": 1,
            "age": 30,
            "fur": "black",
            "id": 8
        }
        const nameFieldValidationResponse = await request.post(`/cats`, {
            data: nameFieldValidationRequest
        });
        const nameFieldValidationResponseJson = await nameFieldValidationResponse.json();
        expect(nameFieldValidationResponse.ok()).toBeFalsy();
        expect(nameFieldValidationResponseJson).toEqual("Incorrect body");
    })
    test('should check age field validation',  async ({ request }) => {
        const nameFieldValidationRequest = {
            "name": "mur",
            "age": "mur",
            "fur": "black",
            "id": 8
        }
        const nameFieldValidationResponse = await request.post(`/cats`, {
            data: nameFieldValidationRequest
        });
        const nameFieldValidationResponseJson = await nameFieldValidationResponse.json();
        expect(nameFieldValidationResponse.ok()).toBeFalsy();
        expect(nameFieldValidationResponseJson).toEqual("Incorrect body");
    })
    test('should check fur  field validation',  async ({ request }) => {
        const nameFieldValidationRequest = {
            "name": "mur",
            "age": 30,
            "fur": 7,
            "id": 8
        }
        const nameFieldValidationResponse = await request.post(`/cats`, {
            data: nameFieldValidationRequest
        });
        const nameFieldValidationResponseJson = await nameFieldValidationResponse.json();
        expect(nameFieldValidationResponse.ok()).toBeFalsy();
        expect(nameFieldValidationResponseJson).toEqual("Incorrect body");
    })
    test('should check id field validation',  async ({ request }) => {
        const nameFieldValidationRequest = {
            "name": "mur",
            "age": 10,
            "fur": "black",
            "id": "mur"
        }
        const nameFieldValidationResponse = await request.post(`/cats`, {
            data: nameFieldValidationRequest
        });
        const nameFieldValidationResponseJson = await nameFieldValidationResponse.json();
        expect(nameFieldValidationResponse.ok()).toBeFalsy();
        expect(nameFieldValidationResponseJson).toEqual("Incorrect body");
    })

})

test.afterAll(async ({ request }) => {
    const response = await request.delete(`/cats/${requestBody.id}`);
    expect(response.ok()).toBeTruthy();
});


