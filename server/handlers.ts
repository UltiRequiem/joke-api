import { handelify } from "./utils.ts";
import { randomJoke } from "../pkg/mod.ts";

const randomJokeHandler = handelify(randomJoke);

export { randomJokeHandler };
