import { test, expect } from '@playwright/test';

let catBody = {
    name: "Chuha",
    gender: "female",
    colour: "black",
    character: "bi-polar hissy furrball",
    age: 0
};

test.describe(`post cat validation check}`, () => {

    test(`invalid cat name`, async ({
       request,}) =>

    {
        catBody.name = 4;
        const postAPIResponse = await request.post("/cats", {
            data: catBody
        });
        expect(postAPIResponse.status()).toBe(400);
    });

    test(`invalid cat colour ${catBody}`, async ({
                                                   request,}) =>
    {   catBody.colour = 4;
        const postAPIResponse = await request.post("http://127.0.0.1:3000/cats", {
            data: catBody
        });
        expect(postAPIResponse.status()).toBe(400);
    });

    test(`invalid cat age ${catBody}`, async ({
                                                   request,}) =>
    {   catBody.age = "4";
        const postAPIResponse = await request.post("http://127.0.0.1:3000/cats", {
            data: catBody
        });
        expect(postAPIResponse.status()).toBe(400);
    });

    test(`invalid cat gender ${catBody}`, async ({
                                                   request,}) =>
    {   catBody.gender = 4;
        const postAPIResponse = await request.post("http://127.0.0.1:3000/cats", {
            data: catBody
        });
        expect(postAPIResponse.status()).toBe(400);
    });

    test(`invalid cat character ${catBody}`, async ({
                                                   request,}) =>
    {   catBody.character = 4;
        const postAPIResponse = await request.post("http://127.0.0.1:3000/cats", {
            data: catBody
        });
        expect(postAPIResponse.status()).toBe(400);
    });




});
