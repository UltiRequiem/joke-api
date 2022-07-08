import { handelify } from "./utils.ts";
import randomJoke, {
  jokeByID,
  jokesCategories,
  randomJokesByType,
  randomQuantityJokes,
} from "../mod.ts";
import { json, PathParams, validateRequest } from "./deps.ts";

export const randomJokeHandler = handelify(randomJoke);

export const jokesCategoriesHandler = handelify(jokesCategories);

export const notFoundHandler = handelify(() => ({
  status: 404,
  error: "Route not found.",
}));

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

export async function jokeByIdHandler(request: Request, params: PathParams) {
  const { error } = await validateRequest(request, {
    GET: {},
  });

  if (error) {
    return json({ error: error.message }, { status: error.status });
  }

  return json(jokeByID(Number(params?.number)));
}
