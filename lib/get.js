// Tiny fetch wrapper: builds the URL with query params, times out, and throws on non-2xx.
export async function getJson(url, params = {}, { timeoutMs = 8000 } = {}) {
  const u = new URL(url);
  for (const [k, v] of Object.entries(params)) u.searchParams.set(k, String(v));
  const res = await fetch(u, {
    headers: { Accept: "application/json" },
    signal: AbortSignal.timeout(timeoutMs),
  });
  if (!res.ok) throw new Error(`${res.status} ${res.statusText} for ${u}`);
  return res.json();
}
