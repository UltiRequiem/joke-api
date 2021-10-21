# Jokes 😜

[![GitMoji](https://img.shields.io/badge/Gitmoji-%F0%9F%8E%A8%20-FFDD67.svg)](https://gitmoji.dev)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
![Total Lines Of Code](https://img.shields.io/tokei/lines/github.com/UltiRequiem/joke?color=blue&label=Total%20Lines)
![CI](https://github.com/UltiRequiem/joke/workflows/CI/badge.svg)

## API

### `GET /`

> https://joke.deno.dev

Get A random joke in this format:

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

### `GET /type/{subject}/{number}`

> https://joke.deno.dev/type/programming/1

Returns an array of the jokes whith the type `{subject}` and the length `number`.

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

Check the [docs](./docs/API.md) for other endpoints and code snippets of usage.

## Library

TODO

## License

This project is licensed under the [MIT License](./LICENSE.md).
