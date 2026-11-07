// JSONPlaceholder — https://jsonplaceholder.typicode.com  (no key, fake data).
// Shows GET with a filter AND POST with a JSON body (the POST is simulated; nothing is stored).
import { getJson } from "../lib/get.js";

const BASE = "https://jsonplaceholder.typicode.com";

export async function posts() {
  const list = await getJson(`${BASE}/posts`, { userId: 1, _limit: 3 });
  const created = await fetch(`${BASE}/posts`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title: "hello", body: "from claude-playground", userId: 1 }),
  }).then((r) => r.json());
  return [
    ...list.map((p) => `#${p.id} ${p.title}`),
    `POST -> got back id ${created.id}`,
  ].join("\n");
}

if (import.meta.url === `file://${process.argv[1]}`) console.log(await posts());
