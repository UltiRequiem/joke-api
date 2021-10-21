import { JOKES } from "../data.ts";
import type { Joke } from "../data.ts";

export function randomJoke() {
  return JOKES[Math.floor(Math.random() * JOKES.length)];
}

export function randomN(jokeArray: Joke[], n: number): Joke[] {
  if (n > jokeArray.length) {
    throw new RangeError(
      `Limit exceeded, got ${n} but the total joke array length is ${jokeArray.length}`,
    );
  }

  const jokesSet = new Set();

  while (jokesSet.size < n) {
    const randomJoke = jokeArray[Math.floor(Math.random() * jokeArray.length)];
    if (!jokesSet.has(randomJoke)) {
      jokesSet.add(randomJoke);
    }
  }

  return Array.from(jokesSet) as Joke[];
}

export function randomNJokes(n: number) {
  return randomN(JOKES, n);
}

export function jokeByType(type: string, n: number) {
  return randomN(JOKES.filter((joke) => joke.type === type), n);
}

export default {
  randomJoke,
};
