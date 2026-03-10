const { test, expect } = require('@playwright/test');

let catBody = {
    id: 16,
    name: "Chuha",
    gender: "female",
    colour: "black",
    character: "bi-polar hissy furrball",
    age: 0
};

test(`add cat ${catBody}`, async ({
       request,
   }) => {
    const postAPIResponse = await request.post("http://127.0.0.1:3000/cats", {
        data: catBody
    });
    console.log(await postAPIResponse.json());

    expect(postAPIResponse.ok()).toBeTruthy();
    expect(postAPIResponse.status()).toBe(200);
});
