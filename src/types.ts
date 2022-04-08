export const JokeCategories = [
  "general",
  "knock-knock",
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
