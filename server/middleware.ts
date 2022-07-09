import { Middleware, randomItem, type RouterMiddleware } from "./deps.ts";

import { jokes } from "./data.ts";

export const RootMiddleware: RouterMiddleware<"/"> = (ctx) => {
  ctx.response.body = randomItem(jokes);
};

export const NOCORSMiddleware: Middleware = (ctx, next) => {
  ctx.response.headers.set("Access-Control-Allow-Origin", "*");
  return next();
};
