const http = require("http");
//
require("./config/dbConnect");
//
const app = require("./app/app");

const PORT = process.env.PORT || 4000;
//
const server = http.createServer(app);
//
server.listen(PORT, console.log(`Server running on PORT ${PORT}`));
