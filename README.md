# claude-playground

Small Node examples that call **free, keyless public APIs** using the built-in `fetch`.
No dependencies, no API keys. Needs Node 18+.

```bash
npm run all        # run every example
npm run pokemon -- bulbasaur
```

| Script | API | Shows |
| --- | --- | --- |
| `examples/weather.js` | [Open-Meteo](https://open-meteo.com) | GET with query params |
| `examples/pokemon.js` | [PokéAPI](https://pokeapi.co) | GET with a path param |
| `examples/posts.js` | [JSONPlaceholder](https://jsonplaceholder.typicode.com) | GET with filters, plus POST with a JSON body |
| `examples/dog.js` | [Dog CEO](https://dog.ceo/dog-api) | Optional path segment (`npm run dog -- husky`) |
| `examples/books.js` | [Open Library](https://openlibrary.org/developers/api) | Search + field selection |

`lib/get.js` is the shared helper: it builds the URL from a params object, applies an
8-second timeout, and throws on non-2xx responses.

Each example exports its function and also runs directly, so you can import them elsewhere.

## Behind a proxy

Node's `fetch` ignores `HTTPS_PROXY` by default. If you're in a sandbox/corporate network, run with
`NODE_USE_ENV_PROXY=1` (Node >= 22.21).
