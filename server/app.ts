import { Application, Router } from "./deps.ts";
import {
  AllTypesMiddleware,
  ErrorsMiddleware,
  NOCORSMiddleware,
  NumberMiddleware,
  RootMiddleware,
  TypeMiddleware,
} from "./middleware.ts";

const app = new Application();

const router = new Router();

router.get("/type", AllTypesMiddleware);

router.get("/:id", NumberMiddleware);

router.get("/type/:type", TypeMiddleware);
router.get("/", RootMiddleware);

app.use(NOCORSMiddleware);
app.use(ErrorsMiddleware);

app.use(router.routes());
app.use(router.allowedMethods());

export { app };
