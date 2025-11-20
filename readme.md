# 🎭 The Joke API

![CI](https://github.com/UltiRequiem/joke/workflows/CI/badge.svg)
[![Code Coverage](https://codecov.io/gh/ultirequiem/joke-api/branch/main/graph/badge.svg)](https://codecov.io/gh/ultirequiem/joke-api)
[![Deno Deploy](https://img.shields.io/badge/Deno-Deploy-00ADD8?logo=deno)](https://joke.deno.dev)

A blazing fast, production-ready jokes REST API built with
[Oak](https://github.com/oakserver/oak) on
[Deno Deploy](https://deno.com/deploy/docs). Get random jokes, search by type,
and more! 🦕 🚀

**Base URL:** `https://joke.deno.dev`

## ✨ Features

- 🚀 **Fast & Reliable** - Deployed on Deno Deploy edge network
- 🔒 **CORS Enabled** - Use from any domain
- 💾 **Smart Caching** - Optimized with ETag and Cache-Control headers
- 🛡️ **Secure** - Built-in security headers
- 📦 **2900+ Jokes** - Across multiple categories
- 🎯 **Type-Safe** - Written in TypeScript

## 📚 API Endpoints

### `GET /` - Random Joke

**URL:** `https://joke.deno.dev`

Returns a random joke from the entire collection.

```json
{
  "id": 229,
  "type": "general",
  "setup": "What do you call an alligator in a vest?",
  "punchline": "An in-vest-igator!"
}
```

### `GET /:id` - Get Joke by ID

**URL:** `https://joke.deno.dev/350`

Get a specific joke by its ID. Perfect for saving your favorites!

```json
{
  "id": 350,
  "type": "general",
  "setup": "Why did the tree go to the dentist?",
  "punchline": "It needed a root canal."
}
```

### `GET /type` - List Available Types

**URL:** `https://joke.deno.dev/type`

Returns an array of all available joke types.

```json
["general", "programming", "knock-knock", ...]
```

### `GET /type/:type` - Get Jokes by Type

**URL:** `https://joke.deno.dev/type/programming`

Get all jokes of a specific type.

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

### `GET /type/:type/:quantity` - Get Random Jokes by Type

**URL:** `https://joke.deno.dev/type/general/5`

Get a specific number of random jokes from a category.

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

### `GET /all` - Get All Jokes

**URL:** `https://joke.deno.dev/all`

Returns the complete collection of jokes. Cached for optimal performance.

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

## 🚀 Quick Start

### JavaScript/TypeScript

```typescript
// Get a random joke
const response = await fetch("https://joke.deno.dev");
const joke = await response.json();
console.log(`${joke.setup} - ${joke.punchline}`);
```

### Python

```python
import requests

response = requests.get('https://joke.deno.dev')
joke = response.json()
print(f"{joke['setup']} - {joke['punchline']}")
```

### cURL

```bash
curl https://joke.deno.dev
```

## 🔧 Development

### Prerequisites

- [Deno](https://deno.land/) 1.x or higher

### Run Locally

```bash
# Clone the repository
git clone https://github.com/UltiRequiem/joke-api.git
cd joke-api

# Start the server
deno run --allow-net server/server.ts

# Server runs on http://localhost:3000
```

### Run Tests

```bash
deno test --allow-net
```

## 📊 Analytics

![Requests](https://user-images.githubusercontent.com/71897736/211101270-2a95504a-aa91-4553-9219-9da8fc2e4104.png)

> January 2023, hitting around 400k requests per month.

## 🤝 Contributing

We welcome contributions! Here's how you can help:

### Adding New Jokes

1. Fork the repository
2. Add your joke to `server/data.ts` in this format:

```typescript
{
  id: [last joke id + 1],
  type: "programming", // or "general", "knock-knock", etc.
  setup: "What's the best thing about a Boolean?",
  punchline: "Even if you're wrong, you're only off by a bit."
}
```

3. Submit a Pull Request

### Suggesting Features

Have an idea for a new endpoint or feature? Please:

- [Open an issue](https://github.com/UltiRequiem/joke-api/issues/new) to discuss
  it
- Or submit a [pull request](https://github.com/UltiRequiem/joke-api/fork) with
  your implementation

### Guidelines

- Ensure jokes are appropriate and inclusive
- Test your changes locally before submitting
- Follow the existing code style
- Update tests if needed

## 📖 Data Source

The initial 300 jokes came from
[15Dkatz/official_joke_api](https://github.com/15Dkatz/official_joke_api). Since
that project's server went down and development ceased, we've maintained and
grown the collection.

The collection has expanded to **2900+ jokes** thanks to our amazing
[contributors](https://github.com/UltiRequiem/joke/graphs/contributors)! 🎉

## 🔗 Related Projects

Looking for more? Check out these joke APIs:

- [JokeAPI](https://jokeapi.dev/) - Comprehensive joke API with filtering
- [icanhazdadjoke](https://icanhazdadjoke.com/) - Dad jokes API

## 📝 License

Licensed under the [MIT License](license) 📄

---

Made with ❤️ by [UltiRequiem](https://github.com/UltiRequiem) and
[contributors](https://github.com/UltiRequiem/joke-api/graphs/contributors)
