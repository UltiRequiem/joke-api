import { Application, Router } from "./deps.ts";
import {
  ErrorsMiddleware,
  NOCORSMiddleware,
  NumberMiddleware,
  RootMiddleware,
} from "./middleware.ts";

const app = new Application();

const router = new Router();

router.get("/:id", NumberMiddleware);
router.get("/", RootMiddleware);

app.use(NOCORSMiddleware);
app.use(ErrorsMiddleware);

app.use(router.routes());
app.use(router.allowedMethods());

export { app };
