export default (req, res) => {
  res.setHeader("Cache-Control", `s-maxage=20, stale-while-revalidate`);
  res.end(
    JSON.stringify({
      region: process.env.AWS_REGION || "Edge",
      timestamp: new Date().getTime(),
    })
  );
};
