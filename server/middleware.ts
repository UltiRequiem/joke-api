import { Middleware, type RouterMiddleware } from "@oak/oak";
import { CustomPublicError } from "./error.ts";
import { randomUniqueItems } from "./utils.ts";
import { jokes, jokesByType, jokeTypes } from "./data.ts";
import { randomItem } from "./deps.ts";

export const RootMiddleware: RouterMiddleware<"/"> = (ctx) => {
  ctx.response.body = randomItem(jokes);
};

export const AllMiddleware: RouterMiddleware<"/all"> = (ctx) => {
  ctx.response.body = jokes;
};

export const NumberMiddleware: RouterMiddleware<"/:id"> = (ctx) => {
  const id = Number.parseInt(ctx.params.id, 10);

  const joke = jokes.find((joke) => joke.id === id);

  if (!joke) {
    throw new CustomPublicError(`Joke with ID "${id}" not found.`);
  }

  ctx.response.body = joke;
};

export const AllTypesMiddleware: RouterMiddleware<"/type"> = (ctx) => {
  ctx.response.body = jokeTypes;
};

export const TypeMiddleware: RouterMiddleware<"/type/:type"> = (ctx) => {
  const type = ctx.params.type;

  if (!(type in jokesByType)) {
    throw new CustomPublicError(`Joke category with type "${type}" not found.`);
  }

  ctx.response.body = jokesByType[type];
};

export const TypeQuantityMiddleware: RouterMiddleware<
  "/type/:type/:quanity"
> = (ctx) => {
  const { type, quanity } = ctx.params;

  if (!(type in jokesByType)) {
    throw new CustomPublicError(`Joke category with type "${type}" not found.`);
  }

  try {
    const data = randomUniqueItems(jokesByType[type], +quanity);
    ctx.response.body = data;
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);

    throw new CustomPublicError(`${message} on category "${type}".`);
  }
};

export const NOCORSMiddleware: Middleware = (ctx, next) => {
  ctx.response.headers.set("Access-Control-Allow-Origin", "*");
  return next();
};

export const ErrorsMiddleware: Middleware = async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    if (err instanceof CustomPublicError) {
      ctx.response.body = { error: err.message };
    } else {
      throw err;
    }
  }
};
