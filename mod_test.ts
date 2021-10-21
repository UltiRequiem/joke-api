import { assertEquals } from "https://deno.land/std@0.112.0/testing/asserts.ts";

import randomJoke, {
  randomJokeByType,
  randomJokesByType,
  randomQuantityJokes,
} from "./mod.ts";

Deno.test("Check export default", () => {
  assertEquals(typeof randomJoke().punchline, "string");
});

Deno.test("Test Random Joke By Type", () => {
  const type = "general";

  assertEquals(randomJokeByType(type).type, type);
});

Deno.test("Test Random Jokes By Type", () => {
  const type = "programming";

  assertEquals(randomJokesByType(type, 1)[0].type, type);
});

Deno.test("Check Legnth of randomNJokes", () => {
  assertEquals(randomQuantityJokes(3).length, 3);
});
