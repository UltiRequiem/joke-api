import { JOKES } from "../data.ts";

export function randomJoke() {
  return JOKES[Math.floor(Math.random() * JOKES.length)];
}

export default {
  randomJoke,
};
