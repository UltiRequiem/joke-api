# The Joke API

![CI](https://github.com/UltiRequiem/joke/workflows/CI/badge.svg)
[![Code Coverage](https://codecov.io/gh/ultirequiem/joke-api/branch/main/graph/badge.svg)](https://codecov.io/gh/ultirequiem/joke-api)

A blazing fast jokes REST API made with [Oak](https://github.com/oakserver/oak)
on [Deno Deploy](https://deno.com/deploy/docs) 🦕 🚀

## API

### `GET /`

> https://joke.deno.dev

Get a random joke ✨

```json
{
  "id": 229,
  "type": "general",
  "setup": "What do you call an alligator in a vest?",
  "punchline": "An in-vest-igator!"
}
```

### `GET /:id`

> https://joke.deno.dev/350

Did you like a joke? Get the same one whenever you want 🦀

```json
{
  "id": 350,
  "type": "general",
  "setup": "Why did the tree go to the dentist?",
  "punchline": "It needed a root canal."
}
```

### `GET /type/:type`

> https://joke.deno.dev/type/programming

Looking for a specific type of jokes? You're lucky 🐌

```json
[
  {
    "id": 15,
    "type": "programming",
    "setup": "What's the best thing about a Boolean?",
    "punchline": "Even if you're wrong, you're only off by a bit."
  },
  {
    "id": 16,
    "type": "programming",
    "setup": "What's the object-oriented way to become wealthy?",
    "punchline": "Inheritance"
  },
  ...
]
```

All available types are listed on `GET /type` 🕵️‍♂️

### `GET /type/:type/:quantity`

Looking for a specific amount of a specific type of jokes? We got you covered 🐿

> https://joke.deno.dev/type/general/1

```json
[
  {
    "id": 90,
    "type": "general",
    "setup": "Did you hear about the guy who invented Lifesavers?",
    "punchline": "They say he made a mint."
  }
]
```

### `GET /all`

> https://joke.deno.dev/all

Do you really need so many jokes? Leave everything to us ⚡

```json
[
  {
    "id": 1,
    "type": "general",
    "setup": "What did the fish say when it hit the wall?",
    "punchline": "Dam."
  },
  {
    "id": 2,
    "type": "general",
    "setup": "How do you make a tissue dance?",
    "punchline": "You put a little boogie on it."
  },
  {
    "id": 3,
    "type": "general",
    "setup": "What's Forrest Gump's password?",
    "punchline": "1Forrest1"
  }
  ...
]
```

## Analytics

![Requests](https://user-images.githubusercontent.com/71897736/211101270-2a95504a-aa91-4553-9219-9da8fc2e4104.png)

> January 2023, hitting around 400k requests per month.

## Contributing

Submit a Pull Request, with your joke added to the `server/data.ts` file. Make
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
[issue](https://github.com/UltiRequiem/joke-api/issues/new) or a
[pull request](https://github.com/UltiRequiem/joke-api/fork).

## How the Jokes were collected

The first 300 Jokes comes from
[15Dkatz/official_joke_api](https://github.com/15Dkatz/official_joke_api) (At
the moment of writting this, this project has 428 jokes.), the problem with that
project is that its
[server is down](https://github.com/15Dkatz/official_joke_api/issues/93), and it
[has not been updated for 2 years](https://github.com/15Dkatz/official_joke_api/commits/master).

The other jokes were progressively added by
[contributors](https://github.com/UltiRequiem/joke/graphs/contributors).

## Licence

Licensed under the MIT License 📄
