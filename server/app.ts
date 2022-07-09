import { Application, Router } from "./deps.ts";

import { NOCORSMiddleware, RootMiddleware } from "./middleware.ts";

const app = new Application();

const router = new Router();

router.get("/", RootMiddleware);

app.use(NOCORSMiddleware);

app.use(router.routes());
app.use(router.allowedMethods());

export { app };
