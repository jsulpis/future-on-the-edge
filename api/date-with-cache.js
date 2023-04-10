export default (req, res) => {
   const payload = {
      region: process.env.AWS_REGION,
      timestamp: new Date().getTime(),
   };

   res.setHeader("Cache-Control", `s-maxage=20, stale-while-revalidate=60`);
   res.send(payload);
};
