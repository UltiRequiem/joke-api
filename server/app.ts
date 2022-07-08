import { Application, Router } from "./deps.ts";

import { RootMiddleware } from "./middleware.ts";

const app = new Application();
const router = new Router();

router.get("/", RootMiddleware);

app.use((ctx, next) => {
  ctx.response.headers.set("Access-Control-Allow-Origin", "*");
  return next();
});

app.use(router.routes());
app.use(router.allowedMethods());

export { app };
