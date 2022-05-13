import { JOKES, type Joke } from "./data.ts";

export default function randomJoke() {
  return JOKES[Math.floor(Math.random() * JOKES.length)];
}

export function allJokes() {
  return JOKES;
}

export function jokeByID(id: number) {
  return JOKES.filter((jk) => jk.id === id)[0];
}

function randomN(jokeArray: Joke[], n: number): Joke[] {
  if (n > jokeArray.length) {
    throw new RangeError(
      `Limit exceeded, got ${n} but the total joke array length is ${jokeArray.length}.`
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

export function randomQuantityJokes(n: number) {
  return randomN(JOKES, n);
}

export function randomJokesByType(type: string, n?: number) {
  const filteredJokes = JOKES.filter((joke) => joke.type === type);

  if (typeof n === "undefined") {
    n = filteredJokes.length;
  }

  return randomN(filteredJokes, n);
}

export function jokesCategories() {
  const jokesCategories = new Set();

  for (let i = 0; i < JOKES.length; i++) {
    const currentCategory = JOKES[i].type;
    if (!jokesCategories.add(currentCategory)) {
      jokesCategories.add(currentCategory);
    }
  }

  return Array.from(jokesCategories);
}

export function randomJokeByType(type: string) {
  return randomJokesByType(type, 1)[0];
}