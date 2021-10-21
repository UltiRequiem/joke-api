import { serve } from "./deps.ts";

import {
  jokeByIdHandler,
  notFoundHandler,
  randomJokeHandler,
  randomJokeHandlerQuantity,
  randomJokesByTypeHandler,
} from "./handlers.ts";

serve({
  "/": randomJokeHandler,
  "/:quantity": randomJokeHandlerQuantity,
  "/id/:number": jokeByIdHandler,
  "/type/:type/:quantity": randomJokesByTypeHandler,
  "/type/:type": randomJokesByTypeHandler,
  404: notFoundHandler,
});
