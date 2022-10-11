import vercel from "@sveltejs/adapter-vercel";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: vercel(),
    paths: {
      base: "/app-edge",
    },
  },
};

export default config;
