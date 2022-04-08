import { Application } from "./deps.ts";

import { Repository } from "./lib/mod.ts";

const repo = new Repository();

const app = new Application();

app.use(async(ctx) => {
  ctx.response.body = await repo.allJokes();
});

app.listen({ port: 8000 });
