import { equal } from "@std/testing/asserts";
import { superoak } from "superoak";

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
