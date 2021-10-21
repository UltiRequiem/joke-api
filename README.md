# Jokes 😜

[![GitMoji](https://img.shields.io/badge/Gitmoji-%F0%9F%8E%A8%20-FFDD67.svg)](https://gitmoji.dev)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
![Total Lines Of Code](https://img.shields.io/tokei/lines/github.com/UltiRequiem/joke?color=blue&label=Total%20Lines)
![CI](https://github.com/UltiRequiem/joke/workflows/CI/badge.svg)

## API

Basic usage:

```bash
curl https://joke.deno.dev
{"id":229,"type":"general","setup":"What do you call an alligator in a vest?","punchline":"An in-vest-igator!"}
```

```bash
curl https://joke.deno.dev/2
[{"id":20,"type":"general","setup":"What do you call a laughing motorcycle?","punchline":"A Yamahahahaha."},{"id":272,"type":"general","setup":"What lies atthe bottom of the ocean and twitches?","punchline":"A nervous wreck."}]
```

```bash
curl https://joke.deno.dev/type/programming # All the jokes about programming
```

TODO

If you want to check code snippets of usage(in different languages) and extra info check the [docs](./docs/API.md).

## Library

TODO

## License

This project is licensed under the [MIT License](./LICENSE.md).
