import { PRODUCTION } from "../config.ts";

if (!PRODUCTION) {
  await import("https://deno.land/std@0.133.0/dotenv/load.ts");
}

const token = Deno.env.get("FAUNA_TOKEN");

if (!token) {
  throw new Error("FAUNA_TOKEN is not defined");
}

export class FaunaDBError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "FaunaDBError";
  }
}

export async function fauna<T>(
  query: string,
  variables: { [key: string]: unknown } = {}
) {
  const res = await fetch("https://graphql.fauna.com/graphql", {
    method: "POST",
    headers: {
      authorization: `Bearer ${token}`,
      "content-type": "application/json",
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  const { data, errors } = await res.json();

  if (errors) {
    throw new FaunaDBError(errors.map((x: Error) => x.message).join("\n"));
  }

  return data as T;
}
