// Open Library — https://openlibrary.org/developers/api  (no key). Search endpoint.
import { getJson } from "../lib/get.js";

export async function books(q = "photography") {
  const { numFound, docs } = await getJson("https://openlibrary.org/search.json", {
    q,
    limit: 3,
    fields: "title,author_name,first_publish_year",
  });
  const lines = docs.map(
    (d) => `${d.title} — ${(d.author_name ?? ["?"])[0]} (${d.first_publish_year ?? "n/a"})`
  );
  return `${numFound} results for "${q}"\n${lines.join("\n")}`;
}

if (import.meta.url === `file://${process.argv[1]}`) console.log(await books(process.argv[2]));
