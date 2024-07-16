const { test, expect } = require('@playwright/test');

test.describe('should check cats incorrect methods', () => {
    test('should check response for put method', async ({ request }) => {
        const putRequestResponse = await request.put(`/cats`);
        expect(putRequestResponse.ok()).toBeFalsy();
    })
    test('should check response for delete method', async ({ request }) => {
        const deleteRequestResponse = await request.delete(`/cats`);
        expect(deleteRequestResponse.ok()).toBeFalsy();
    })
    test('should check response for patch method', async ({ request }) => {
        const patchRequestResponse = await request.patch(`/cats`);
        expect(patchRequestResponse.ok()).toBeFalsy();
    })
    test('should check response for head method', async ({ request }) => {
        const headRequestResponse = await request.head(`/cats`);
        expect(headRequestResponse.ok()).toBeFalsy();
    })
    test('should check response for options method', async ({ request }) => {
        const optionsRequestResponse = await request.fetch(`/cats`, {
            method: 'options'
        });
        expect(optionsRequestResponse.ok()).toBeFalsy();
    })
})



