import { handelify } from "./utils.ts";
import { randomJoke, randomNJokes } from "../pkg/mod.ts";
import { json, validateRequest } from "./deps.ts";

const randomJokeHandler = handelify(randomJoke);

const notFoundHandler = handelify(() => {
  return { status: 404, error: "Route not found." };
});

// deno-lint-ignore no-explicit-any
export async function randomJokeHandlerQuantity(request: Request, params: any) {
  const { error } = await validateRequest(request, {
    GET: {},
  });

  if (error) {
    return json({ error: error.message }, { status: error.status });
  }

  return json(randomNJokes(params?.quantity));
}

export { notFoundHandler, randomJokeHandler };
