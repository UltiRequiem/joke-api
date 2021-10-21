import { serve } from "./deps.ts";

import {
  notFoundHandler,
  randomJokeHandler,
  randomJokeHandlerQuantity,
  randomJokesByTypeHandler,
} from "./handlers.ts";

serve({
  "/": randomJokeHandler,
  "/:quantity": randomJokeHandlerQuantity,
  "/type/:quantity": randomJokesByTypeHandler,
  404: notFoundHandler,
});
