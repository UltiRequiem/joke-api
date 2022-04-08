import { fauna } from "./fauna.ts";

import { gql } from "../utils/mod.ts";

import type { Joke } from "../definitions.ts";

export async function allJokes() {
  const query = gql`
    query {
      allJokes {
        data {
          category
          setup
          punchline
        }
      }
    }
  `;

  const response = await fauna<{ allJokes: { data: Joke[] } }>(query);

  return response.allJokes.data;
}
