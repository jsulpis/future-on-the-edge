export default (req, res) => {
  const payload = {
    region: process.env.AWS_REGION || "✨ Edge ✨",
    timestamp: new Date().getTime(),
  };

  res.setHeader("Cache-Control", `s-maxage=20, stale-while-revalidate`);
  res.end(JSON.stringify(payload));
};
