// Open-Meteo — https://open-meteo.com  (no key). Query params: lat/lon + fields wanted.
import { getJson } from "../lib/get.js";

export async function weather(latitude = 35.2271, longitude = -80.8431) { // Charlotte, NC
  const data = await getJson("https://api.open-meteo.com/v1/forecast", {
    latitude,
    longitude,
    current: "temperature_2m,wind_speed_10m",
    temperature_unit: "fahrenheit",
    wind_speed_unit: "mph",
  });
  const { temperature_2m: temp, wind_speed_10m: wind } = data.current;
  return `Charlotte: ${temp}°F, wind ${wind} mph`;
}

if (import.meta.url === `file://${process.argv[1]}`) console.log(await weather());
