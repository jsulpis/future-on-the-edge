import { env } from "$env/dynamic/private";
import { API_URL } from "$env/static/private";

export async function load({ url }) {
  const name = url.searchParams.get("name") || "World";

  const date = await (await fetch(API_URL)).text();

  const location = env.AWS_REGION || "???";

  return { date, name, location };
}

export let csr = false;
