import type { Middleware, RouterMiddleware } from "@oak/oak";
import { jokes, jokesById, jokesByType, jokeTypes } from "./data.ts";
import { randomItem } from "./deps.ts";
import { CustomPublicError } from "./error.ts";
import { randomUniqueItems } from "./utils.ts";

export const RootMiddleware: RouterMiddleware<"/"> = (ctx) => {
  ctx.response.headers.set("Cache-Control", "no-cache");
  ctx.response.headers.set("Content-Type", "application/json; charset=utf-8");

  ctx.response.body = randomItem(jokes);
};

const etag = `jokes-${jokes.length}`;

export const AllMiddleware: RouterMiddleware<"/all"> = (ctx) => {
  ctx.response.headers.set("ETag", etag);
  ctx.response.headers.set("Cache-Control", "public, max-age=3600");
  ctx.response.headers.set("Content-Type", "application/json; charset=utf-8");

  if (ctx.request.headers.get("If-None-Match") === etag) {
    ctx.response.status = 304;
    return;
  }

  ctx.response.body = jokes;
};

export const NumberMiddleware: RouterMiddleware<"/:id"> = (ctx) => {
  const id = Number.parseInt(ctx.params.id, 10);

  const joke = jokesById.get(id);

  if (!joke) {
    throw new CustomPublicError(`Joke with ID "${id}" not found.`);
  }

  ctx.response.body = joke;
};

export const AllTypesMiddleware: RouterMiddleware<"/type"> = (ctx) => {
  ctx.response.headers.set("Cache-Control", "public, max-age=3600");
  ctx.response.headers.set("Content-Type", "application/json; charset=utf-8");

  ctx.response.body = jokeTypes;
};

export const TypeMiddleware: RouterMiddleware<"/type/:type"> = (ctx) => {
  const type = ctx.params.type;

  if (!(type in jokesByType)) {
    throw new CustomPublicError(`Joke category with type "${type}" not found.`);
  }

  ctx.response.headers.set("Cache-Control", "public, max-age=3600");
  ctx.response.headers.set("Content-Type", "application/json; charset=utf-8");

  ctx.response.body = jokesByType[type];
};

export const TypeQuantityMiddleware: RouterMiddleware<
  "/type/:type/:quantity"
> = (ctx) => {
  const { type, quantity } = ctx.params;

  const safeQuantity = Number.parseInt(quantity, 10);

  if (Number.isNaN(safeQuantity) || safeQuantity < 1) {
    throw new CustomPublicError("Quantity must be a positive number");
  }

  if (!(type in jokesByType)) {
    throw new CustomPublicError(`Joke category with type "${type}" not found.`);
  }

  try {
    const data = randomUniqueItems(jokesByType[type], safeQuantity);

    ctx.response.headers.set("Cache-Control", "no-cache");
    ctx.response.headers.set("Content-Type", "application/json; charset=utf-8");

    ctx.response.body = data;
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);

    throw new CustomPublicError(`${message} on category "${type}".`);
  }
};

export const NOCORSMiddleware: Middleware = async (ctx, next) => {
  ctx.response.headers.set("Access-Control-Allow-Origin", "*");
  ctx.response.headers.set("Access-Control-Allow-Methods", "GET, OPTIONS");
  ctx.response.headers.set("Access-Control-Allow-Headers", "Content-Type");
  ctx.response.headers.set("X-Content-Type-Options", "nosniff");
  ctx.response.headers.set("X-Frame-Options", "DENY");

  if (ctx.request.method === "OPTIONS") {
    ctx.response.status = 204;
    return;
  }

  await next();
};

export const ErrorsMiddleware: Middleware = async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    if (err instanceof CustomPublicError) {
      ctx.response.status = 404;
      ctx.response.headers.set(
        "Content-Type",
        "application/json; charset=utf-8",
      );
      ctx.response.body = { error: err.message };
    } else {
      throw err;
    }
  }
};
