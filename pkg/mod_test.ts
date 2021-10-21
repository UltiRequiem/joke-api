import { assert, assertEquals } from "./test_depts.ts";
import { jokeByType, randomJoke, randomN, randomNJokes } from "./mod.ts";

Deno.test("Check Legnth of randomNJokes", () => {
  assertEquals(randomNJokes(3).length, 3);
});
