export function randomUniqueItems<T>(array: readonly T[], quantity: number) {
  if (array.length < quantity) {
    throw new RangeError("Asked for more items than they are");
  }

  const result = [...array];

  for (let i = 0; i < quantity; i++) {
    const j = i + Math.floor(Math.random() * (result.length - i));
    [result[i], result[j]] = [result[j], result[i]];
  }

  return result.slice(0, quantity);
}
