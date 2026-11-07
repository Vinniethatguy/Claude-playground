// Dog CEO — https://dog.ceo/dog-api  (no key). Returns an image URL.
import { getJson } from "../lib/get.js";

export async function dog(breed = "") {
  const path = breed ? `breed/${encodeURIComponent(breed)}/images/random` : "breeds/image/random";
  const { message, status } = await getJson(`https://dog.ceo/api/${path}`);
  return `${status}: ${message}`;
}

if (import.meta.url === `file://${process.argv[1]}`) console.log(await dog(process.argv[2]));
