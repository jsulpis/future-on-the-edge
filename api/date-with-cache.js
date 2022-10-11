export default (req, res) => {
  res.setHeader("Cache-Control", `s-maxage=20, stale-while-revalidate`);
  res.end(new Date().toISOString());
};
