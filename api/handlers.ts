import { handelify } from "./utils.ts";
import { randomJoke, randomJokesByType, randomQuantityJokes } from "../mod.ts";
import { json, PathParams, validateRequest } from "./deps.ts";

const randomJokeHandler = handelify(randomJoke);

const notFoundHandler = handelify(() => {
  return { status: 404, error: "Route not found." };
});

export async function randomJokeHandlerQuantity(
  request: Request,
  params: PathParams,
) {
  const { error } = await validateRequest(request, {
    GET: {},
  });

  if (error) {
    return json({ error: error.message }, { status: error.status });
  }

  return json(randomQuantityJokes(Number(params?.quantity)));
}

export async function randomJokesByTypeHandler(
  request: Request,
  params: PathParams,
) {
  const { error } = await validateRequest(request, {
    GET: {},
  });

  if (error) {
    return json({ error: error.message }, { status: error.status });
  }

  return json(
    randomJokesByType(
      params?.type as string,
      params?.quantity as number | undefined,
    ),
  );
}

export { notFoundHandler, randomJokeHandler };
