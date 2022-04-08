export function gql(
  strings: TemplateStringsArray,
  ...values: unknown[]
): string {
  const parts: string[] = [strings[0]];

  for (let i = 0; i < values.length; i++) {
    parts.push(String(values[i]));
    parts.push(strings[i + 1]);
  }

  return parts.join("");
}

