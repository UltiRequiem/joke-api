import { fauna } from "./fauna.ts";

import { gql } from "../utils/mod.ts";

import type { Jokes } from "../definitions.ts";

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

  const response = await fauna<{ allJokes: { data: Jokes } }>(query);

  return response.allJokes.data;
}
