# Library Docs

## `randomJoke`

```typescript
import { randomJoke } from 'https://deno.land/x/joke/mod.ts';
console.log(randomJoke());
// {"id":187,"type":"general","setup":"What did the late tomato say to the early tomato?","punchline":"I’ll ketch up"}
```

## `allJokes`

```typescript
import { allJokes } from 'https://deno.land/x/joke/mod.ts';
console.log(allJokes()); // [...JOKES]
```

## `jokeByID`

```typescript
import { jokeByID } from 'https://deno.land/x/joke/mod.ts';
console.log(jokeByID(5));
// {"id":5,"type":"general","setup":"Why can't bicycles stand on their own?","punchline":"They are two tired"}
```

## `randomQuantityJokes`

```typescript
import { randomQuantityJokes } from 'https://deno.land/x/joke/mod.ts';
console.log(randomQuantityJokes(1));
// [{"id":233,"type":"general","setup":"What do you call an old snowman?","punchline":"Water."}]
```

## `randomJokesByType`

```typescript
import { randomJokesByType } from 'https://deno.land/x/joke/mod.ts';
console.log('anime', 1);
// [{"id":390,"type":"anime","setup":"If Erin, Marco and Jean made a tv show?","punchline":"It would be called two and a half men."}]
```

## `jokesCategories`

Returns all the available jokes categories.

```typescript
import { jokesCategories } from 'https://deno.land/x/joke/mod.ts';
console.log(jokesCategories()); // ["general","knock-knock","programming","anime","food","dad"]
```

## `randomJokeByType`

```typescript
import { randomJokeByType } from 'https://deno.land/x/joke/mod.ts';
console.log(randomJokeByType('dad'));
// [{"id":425,"type":"dad","setup":"Why don't eggs tell jokes?","punchline":"Because they would crack each other up."}]
```
