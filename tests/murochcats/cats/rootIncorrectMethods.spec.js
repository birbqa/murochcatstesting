const { test, expect } = require('@playwright/test');

test.describe('should check root incorrect methods', () => {
    test('should check response for put method', async ({ request }) => {
        const putRequestResponse = await request.put(``);
        expect(putRequestResponse.ok()).toBeFalsy();
    })
    test('should check response for delete method', async ({ request }) => {
        const deleteRequestResponse = await request.delete(``);
        expect(deleteRequestResponse.ok()).toBeFalsy();
    })
    test('should check response for patch method', async ({ request }) => {
        const patchRequestResponse = await request.patch(``);
        expect(patchRequestResponse.ok()).toBeFalsy();
    })
    test('should check response for head method', async ({ request }) => {
        const headRequestResponse = await request.head(``);
        expect(headRequestResponse.ok()).toBeFalsy();
    })
    test('should check response for post method', async ({ request }) => {
        const postRequestResponse = await request.post(``);
        expect(postRequestResponse.ok()).toBeFalsy();
    })
    test('should check response for options method', async ({ request }) => {
        const optionsRequestResponse = await request.fetch(``, {
            method: 'options'
        });
        expect(optionsRequestResponse.ok()).toBeFalsy();
    })
})



