export function shuffle<T>(array: readonly T[]) {
  const parsed = [...array];

  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);

    currentIndex--;

    // And swap it with the current element.
    [parsed[currentIndex], parsed[randomIndex]] = [
      parsed[randomIndex],
      parsed[currentIndex],
    ];
  }

  return parsed;
}

export function randomUniqueItems<T>(array: readonly T[], quanity: number) {
  if (array.length < quanity) {
    throw new RangeError("Asked for more items than they are");
  }

  const shuffledArray = shuffle(array);

  return shuffledArray.slice(0, quanity);
}
