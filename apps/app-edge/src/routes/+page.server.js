import { env } from "$env/dynamic/private";
import { API_URL } from "$env/static/private";

export async function load({ url }) {
  // SSR data
  const name = url.searchParams.get("name");
  const ssrRegion = env.AWS_REGION || "✨ Edge ✨";

  // API data
  const apiResponse = await fetch(API_URL);
  const apiCacheStatus = apiResponse.headers.get("x-vercel-cache");

  const { region: apiRegion, timestamp } = await apiResponse.json();

  return {
    api: {
      region: apiRegion,
      timestamp,
      cacheStatus: apiCacheStatus,
    },
    name,
    ssrRegion,
  };
}

export let csr = false;
