import { Application } from "../deps.ts";

const app = new Application();

app.use((ctx) => {
  ctx.response.body = [1, 2, 3];
});

app.listen({ port: 8000 });
