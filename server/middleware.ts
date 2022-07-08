import { randomItem, type RouterMiddleware } from "./deps.ts";

import { jokes } from "./data.ts";

export const RootMiddleware: RouterMiddleware<"/"> = (ctx) => {
  ctx.response.body = randomItem(jokes);
};
