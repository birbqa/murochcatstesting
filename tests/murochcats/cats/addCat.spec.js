const { test, expect } = require('@playwright/test');

let catBody = {
    name: "Chuha",
    gender: "female",
    colour: "black",
    character: "bi-polar hissy furrball",
    age: 0
};

test(`add cat ${catBody}`, async ({
       request,
   }) => {
    const postAPIResponse = await request.post("/cats", {
        data: catBody
    });
    console.log(await postAPIResponse.json());

    expect(postAPIResponse.ok()).toBeTruthy();
    expect(postAPIResponse.status()).toBe(200);
});
