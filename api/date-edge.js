export const config = {
   runtime: "experimental-edge",
};

export default () => {
   const payload = {
      region: "✨ Edge ✨",
      timestamp: new Date().getTime(),
   };

   return new Response(JSON.stringify(payload));
};
