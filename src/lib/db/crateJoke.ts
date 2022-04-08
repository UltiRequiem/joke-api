import { fauna } from "./fauna.ts";

import { gql } from "../utils/mod.ts";

import type { Joke } from "../definitions.ts";

export async function createJoke(joke: Joke) {
  const query = gql`
    mutation ($category: String!, $setup: String!, $punchline: String!) {
      createJoke(
        data: { category: $category, setup: $setup, punchline: $punchline }
      ) {
        category
        setup
        punchline
      }
    }
  `;

  return fauna<Joke>(query, joke);
}
