# Joke 😜

[![GitMoji](https://img.shields.io/badge/Gitmoji-%F0%9F%8E%A8%20-FFDD67.svg)](https://gitmoji.dev)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
![Total Lines Of Code](https://img.shields.io/tokei/lines/github.com/UltiRequiem/joke?color=blue&label=Total%20Lines)
![CI](https://github.com/UltiRequiem/joke/workflows/CI/badge.svg)

An API and Library of Jokes.

## API

### `GET /`

> https://joke.deno.dev

Returns a random joke in this format:

```json
{
  "id": 229,
  "type": "general",
  "setup": "What do you call an alligator in a vest?",
  "punchline": "An in-vest-igator!"
}
```

### `GET /{number}`

> https://joke.deno.dev/2

Returns an array of jokes with the length of `{number}`.

```json
[
  {
    "id": 20,
    "type": "general",
    "setup": "What do you call a laughing motorcycle?",
    "punchline": "A Yamahahahaha."
  },
  {
    "id": 272,
    "type": "general",
    "setup": "What lies atthe bottom of the ocean and twitches?",
    "punchline": "A nervous wreck."
  }
]
```

### `GET /type/{subject}`

> https://joke.deno.dev/type/programming

Returns an array with all the jokes whith the type `{subject}`.

```json
[
  {
    "id": 33,
    "type": "programming",
    "setup": "Which song would an exception sing?",
    "punchline": "Can't catch me - Avicii"
  },
  {
    "id": 28,
    "type": "programming",
    "setup": "To understand what recursion is...",
    "punchline": "You must first understand what recursion is"
  }
]
```

> There are a lot more programming jokes than these, I don't add them because I
> don't want a huge readme.

### `GET /type/{subject}/{number}`

> https://joke.deno.dev/type/programming/1

Returns an array of the jokes whith the type `{subject}` and the length
`{number}`.

```json
[
  {
    "id": 56,
    "type": "programming",
    "setup": "How do you check if a webpage is HTML5?",
    "punchline": "Try it out on Internet Explorer"
  }
]
```

### `GET /id/{number}`

> https://joke.deno.dev/id/425

Returns a joke whith the id `{number}`.

```json
{
  "id": 425,
  "type": "dad",
  "setup": "Why don't eggs tell jokes?",
  "punchline": "Because they would crack each other up."
}
```

### `GET /categories/all`

> https://joke.deno.dev/categories/all

Returns all the available jokes categories.

```json
["general", "knock-knock", "programming", "anime", "food", "dad"]
```

Check the [docs](./docs/API.md) for language-specific wrappers, projects using
this API and code snippets of usage.

## Library

```typescript
import randomJoke, { randomJokeByType } from "https://deno.land/x/joke/mod.ts";

console.log(randomJoke());
console.log(randomJokesByType("general"));
```

Check the [docs](./docs/LIB.md) to know all the exported functions and check the
[tests](./mod_test.ts) for more usage examples.

## How the Jokes were collected

The first 300 Jokes comes from
[15Dkatz/official_joke_api](https://github.com/15Dkatz/official_joke_api) (At
the moment of writting this, this project has 428 jokes.), the problem with that
project is that its
[server is down](https://github.com/15Dkatz/official_joke_api/issues/93), and it
[has not been updated for 2 years](https://github.com/15Dkatz/official_joke_api/commits/master).

The other jokes were progressively added by
[contributors](https://github.com/UltiRequiem/joke/graphs/contributors).

## Contributing

Submit a Pull Request, with your joke added to the [data.ts](./data.ts). Make
sure your joke is in this format:

```typescript
{
  "id": last joke id + 1,
  "type": "programming",
  "setup": "What's the best thing about a Boolean?",
  "punchline": "Even if you're wrong, you're only off by a bit."
}
```

If you have an idea for a new endpoint, submit an
[Issue](https://github.com/UltiRequiem/joke/issues/new) or a
[Pull Request](https://github.com/UltiRequiem/joke/fork).

## License

This project is licensed under the [MIT License](./LICENSE.md).
