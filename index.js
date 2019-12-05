const server = require("./api/server.js");

const port = process.env.PORT || 4000;

server.listen(4004, () => {
  console.log(`\n*** Server Running on http://localhost:${port} ***\n`);
});
