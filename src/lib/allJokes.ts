import { fauna } from "./fauna.ts";
import type { Joke } from "../types.ts";

import { gql } from "../util.ts";

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
