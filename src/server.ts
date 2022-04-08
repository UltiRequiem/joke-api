import { Application, Router } from "../deps.ts";
import {
  CategoryMiddleware,
  AllJokesMiddleware,
  NotFoundMiddleware,
} from "./middleware.ts";

const router = new Router();

router.get("/", AllJokesMiddleware);
router.get("/:category", CategoryMiddleware);

const app = new Application();

app.use(router.routes());
app.use(router.allowedMethods());

app.use(NotFoundMiddleware);

app.listen({ port: 8000 });
