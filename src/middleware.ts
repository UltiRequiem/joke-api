import type { RouterMiddleware, Middleware } from "../deps.ts";

import { findJokesByCategory, isJokeCategory, allJokes } from "./lib/mod.ts";

export const CategoryMiddleware: RouterMiddleware<"/:category"> = async (
  context,
  next
) => {
  const category = context.params.category;

  if (!isJokeCategory(category)) {
    return next();
  }

  const jokes = await findJokesByCategory(category);
  context.response.body = jokes;
};

export const AllJokesMiddleware: RouterMiddleware<"/"> = async (context) => {
  context.response.body = await allJokes();
};

export const NotFoundMiddleware: Middleware = async (context) => {
  context.response.status = 404;
  context.response.body = { error: "Not Found", status: 404 };
};
