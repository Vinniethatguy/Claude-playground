import { weather } from "./examples/weather.js";
import { pokemon } from "./examples/pokemon.js";
import { posts } from "./examples/posts.js";
import { dog } from "./examples/dog.js";
import { books } from "./examples/books.js";

const jobs = { weather, pokemon, posts, dog, books };
let failed = 0;
for (const [name, fn] of Object.entries(jobs)) {
  try {
    console.log(`\n## ${name}\n${await fn()}`);
  } catch (err) {
    failed++;
    console.log(`\n## ${name}\nFAILED: ${err.message}`);
  }
}
process.exit(failed ? 1 : 0);
