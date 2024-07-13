const {test, expect}  = require('@playwright/test');


test.describe("should check deleting cat", () => {
    test(`should delete a cat with existing id`, async ({request}) => {
        const id = 1;
        const response = await request.delete(`/cats/${id}`);
        expect(response.ok()).toBeTruthy();
    })
    test(`shouldn't delete cat with non-existing id`, async ({request}) => {
        const id = 90;
        const negativeDeleteResponse = `Cat with id ${id} not found`
        const response = await request.get(`/cats/${id}`);
        const jsonResponse = await response.json();
        expect(response.ok()).toBeFalsy();
        expect(jsonResponse).toEqual(negativeDeleteResponse);
    })
})
