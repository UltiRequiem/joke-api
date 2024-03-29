import { superoak } from "https://deno.land/x/superoak@4.8.1/mod.ts";

import { equal } from "https://deno.land/std@0.220.1/testing/asserts.ts";

import { app } from "./app.ts";
import { jokes } from "./data.ts";

Deno.test("Main", async () => {
  const request = await superoak(app);

  await request.get("/").expect(({ body }) => {
    if (!jokes.find((obj) => equal(obj, body))) {
      console.log(body);
      throw new Error("Did not find this joke.");
    }
  });
});
