export function gql(template: TemplateStringsArray, ..._values: unknown[]) {
  return template.join("");
}
