import { handelify } from "./utils.ts";
import { jokeByType, randomJoke, randomNJokes } from "../pkg/mod.ts";
import { json, validateRequest } from "./deps.ts";

const randomJokeHandler = handelify(randomJoke);

const notFoundHandler = handelify(() => {
  return { status: 404, error: "Route not found." };
});

export async function randomJokeHandlerQuantity(
  request: Request,
  // deno-lint-ignore no-explicit-any
  params: any,
) {
  const { error } = await validateRequest(request, {
    GET: {},
  });

  if (error) {
    return json({ error: error.message }, { status: error.status });
  }

  return json(randomNJokes(params?.quantity as number));
}

export async function randomJokesByTypeHandler(
  request: Request,
  // deno-lint-ignore no-explicit-any
  params: any,
) {
  const { error } = await validateRequest(request, {
    GET: {},
  });

  if (error) {
    return json({ error: error.message }, { status: error.status });
  }

  return json(jokeByType(params?.type as string, params?.quantity as number));
}

export { notFoundHandler, randomJokeHandler };
