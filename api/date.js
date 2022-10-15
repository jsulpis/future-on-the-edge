export default (req, res) =>
  res.end(
    JSON.stringify({
      region: process.env.AWS_REGION || "Edge",
      timestamp: new Date().getTime(),
    })
  );
