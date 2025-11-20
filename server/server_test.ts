import { superoak } from "superoak";

import { app } from "./app.ts";
import { jokes } from "./data.ts";

Deno.test("Main", async () => {
  const request = await superoak(app);

  await request.get("/").expect(({ body }) => {
    const found = jokes.find(
      (obj) => JSON.stringify(obj) === JSON.stringify(body),
    );
    if (!found) {
      console.log(body);
      throw new Error("Did not find this joke.");
    }
  });
});
