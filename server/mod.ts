import { serve } from "./deps.ts";
import { randomJokeHandler } from "./handlers.ts";

serve({
  "/": randomJokeHandler,
});
