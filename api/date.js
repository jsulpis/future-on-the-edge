export default (req, res) => {
  const payload = {
    region: process.env.AWS_REGION,
    timestamp: new Date().getTime(),
  };

  res.send(payload);
};
