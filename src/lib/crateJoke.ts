import { fauna } from "./fauna.ts";
import type { Joke } from "../types.ts";

import { gql } from "../util.ts";

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

  return await fauna<Joke>(query, joke);
}
