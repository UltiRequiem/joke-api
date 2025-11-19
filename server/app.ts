import { Application, Router } from "@oak/oak";
import {
  AllMiddleware,
  AllTypesMiddleware,
  ErrorsMiddleware,
  NOCORSMiddleware,
  NumberMiddleware,
  RootMiddleware,
  TypeMiddleware,
  TypeQuantityMiddleware,
} from "./middleware.ts";

const app = new Application();

const router = new Router();

router.get("/all", AllMiddleware);
router.get("/type", AllTypesMiddleware);

router.get("/:id", NumberMiddleware);

router.get("/type/:type", TypeMiddleware);
router.get("/type/:type/:quanity", TypeQuantityMiddleware);
router.get("/", RootMiddleware);

app.use(NOCORSMiddleware);
app.use(ErrorsMiddleware);

app.use(router.routes());
app.use(router.allowedMethods());

export { app };
