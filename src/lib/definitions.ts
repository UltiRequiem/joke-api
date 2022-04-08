export const JokeCategories = [
  "general",
  "knock",
  "programming",
  "anime",
  "food",
  "dad",
] as const;

export type JokeCategory = typeof JokeCategories[number];

export type Joke = {
  category: JokeCategory;
  setup: string;
  punchline: string;
};
