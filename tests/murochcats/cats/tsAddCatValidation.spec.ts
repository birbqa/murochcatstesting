import { test, expect } from '@playwright/test';
import {APIRequestContext} from "@playwright/test";

let catBody : object = {
    name: "Chuha",
    gender: "female",
    colour: "black",
    character: "bi-polar hissy furrball",
    age: 0
};

test.describe(`post cat validation check}`, () => {

    test(`invalid cat name`, async ({request}: { request: APIRequestContext }) =>

    {
        catBody.name = 4;
        const postAPIResponse = await request.post("/cats", {
            data: catBody
        });
        expect(postAPIResponse.status()).toBe(400);
    });

    test(`invalid cat colour ${catBody}`, async ({request}: { request: APIRequestContext }) =>
    {   catBody.colour = 4;
        const postAPIResponse = await request.post("http://127.0.0.1:3000/cats", {
            data: catBody
        });
        expect(postAPIResponse.status()).toBe(400);
    });

    test(`invalid cat age ${catBody}`, async ({request}: { request: APIRequestContext }) =>
    {   catBody.age = "4";
        const postAPIResponse = await request.post("http://127.0.0.1:3000/cats", {
            data: catBody
        });
        expect(postAPIResponse.status()).toBe(400);
    });

    test(`invalid cat gender ${catBody}`, async ({request}: { request: APIRequestContext }) =>
    {   catBody.gender = 4;
        const postAPIResponse = await request.post("http://127.0.0.1:3000/cats", {
            data: catBody
        });
        expect(postAPIResponse.status()).toBe(400);
    });

    test(`invalid cat character ${catBody}`, async ({request}: { request: APIRequestContext }) =>
    {   catBody.character = 4;
        const postAPIResponse = await request.post("http://127.0.0.1:3000/cats", {
            data: catBody
        });
        expect(postAPIResponse.status()).toBe(400);
    });




});
