export const config = {
  runtime: "experimental-edge",
};

export default () =>
  new Response(
    JSON.stringify({
      region: process.env.AWS_REGION || "Edge",
      timestamp: new Date().getTime(),
    })
  );
