// PokéAPI — https://pokeapi.co  (no key). Path param: name or id.
import { getJson } from "../lib/get.js";

export async function pokemon(name = "pikachu") {
  const p = await getJson(`https://pokeapi.co/api/v2/pokemon/${encodeURIComponent(name.toLowerCase())}`);
  const types = p.types.map((t) => t.type.name).join("/");
  return `${p.name} #${p.id} — ${types}, ${p.height / 10} m, ${p.weight / 10} kg`;
}

if (import.meta.url === `file://${process.argv[1]}`) console.log(await pokemon(process.argv[2]));
