import { fauna } from "./fauna.ts";

import { gql } from "../utils/mod.ts";

import { type JokeCategory, type Jokes } from "../definitions.ts";

export async function findJokesByCategory(category: JokeCategory) {
  const query = gql`
    query ($category: String!) {
      findJokesByCategory(category: $category) {
        data {
          category
          setup
          punchline
        }
      }
    }
  `;

  const response = await fauna<{ findJokesByCategory: { data: Jokes } }>(
    query,
    { category }
  );

  return response.findJokesByCategory.data;
}
