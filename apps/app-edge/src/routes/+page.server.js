import { env } from "$env/dynamic/private";
import { API_BASE_URL } from "$env/static/private";

export async function load({ url }) {
  // SSR data
  const name = url.searchParams.get("name");
  const ssrRegion = env.AWS_REGION || "✨ Edge ✨";

  const apiParam = url.searchParams.get("api");
  const apiRelativeUrl = apiParam ? `/date-${apiParam}` : "/date";

  // API data
  const apiResponse = await fetch(API_BASE_URL + apiRelativeUrl);
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
