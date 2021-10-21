import { serve } from "./deps.ts";

import {
  notFoundHandler,
  randomJokeHandler,
  randomJokeHandlerQuantity,
} from "./handlers.ts";

serve({
  "/": randomJokeHandler,
  "/:quantity": randomJokeHandlerQuantity,
  404: notFoundHandler,
});
