const { test, expect } = require("@playwright/test");
import {APIRequestContext} from "@playwright/test";

test("Get all cats", async ({request} : {request : APIRequestContext}) => {
    const response = await request.get("/cats", {});
    console.log(await response.json());
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
})