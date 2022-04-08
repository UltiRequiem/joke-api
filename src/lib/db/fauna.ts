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

export const GRAPHQL_ENDPOINT = "https://graphql.fauna.com/graphql";

export async function fauna<T>(
  query: string,
  variables: { [key: string]: unknown } = {},
) {
  const response = await fetch(GRAPHQL_ENDPOINT, {
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

  if (!response.ok) {
    throw new FaunaDBError(`${response.status} ${response.statusText}`);
  }

  const { data, errors } = await response.json();

  if (errors) {
    const errorMessage = errors.map((error: Error) => error.message).join("\n");
    throw new FaunaDBError(errorMessage);
  }

  return data as T;
}
