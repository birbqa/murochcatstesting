const { test, expect, APIRequestContext } = require('@playwright/test');
import {APIRequestContext} from "@playwright/test";

let catBody : object = {
    name: "Chuha",
    gender: "female",
    colour: "black",
    character: "bi-polar hissy furrball",
    age: 0
};

test(`add cat ${catBody}`, async ({request}: { request: APIRequestContext }) => {
    const postAPIResponse = await request.post("/cats", {
        data: catBody
    })
    console.log(await postAPIResponse.json());

    expect(postAPIResponse.ok()).toBeTruthy();
    expect(postAPIResponse.status()).toBe(200);
});

