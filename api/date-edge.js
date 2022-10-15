export const config = {
  runtime: "experimental-edge",
};

export default () => {
  const payload = {
    region: process.env.AWS_REGION || "✨ Edge ✨",
    timestamp: new Date().getTime(),
  };

  return new Response(JSON.stringify(payload));
};
