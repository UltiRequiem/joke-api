export const JokeCategories = [
  "general",
  "knock",
  "programming",
  "anime",
  "food",
  "dad",
] as const;

export type JokeCategory = typeof JokeCategories[number];

export function isJokeCategory(
  value: string | JokeCategory
): value is JokeCategory {
  return JokeCategories.includes(value as JokeCategory);
}

export type Joke = {
  category: JokeCategory;
  setup: string;
  punchline: string;
};

export type Jokes = Joke[];
