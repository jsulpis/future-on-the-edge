export const handle = async ({ event, resolve }) => {
   const response = await resolve(event);

   // response.headers.set("Cache-Control", `s-maxage=${5 * 60}`);

   return response;
};
