import { json, validateRequest } from "./deps.ts";

// deno-lint-ignore ban-types
export function handelify(cb: Function) {
  return async (request: Request) => {
    const { error } = await validateRequest(request, {
      GET: {},
    });

    if (error) {
      return json({ error: error.message }, { status: error.status });
    }

    return json(cb());
  };
}
