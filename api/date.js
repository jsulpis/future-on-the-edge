export default (req, res) => {
  const payload = {
    region: process.env.AWS_REGION || "✨ Edge ✨",
    timestamp: new Date().getTime(),
  };

  res.send(payload);
};
