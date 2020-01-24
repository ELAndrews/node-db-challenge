const express = require("express");
const projectRouters = require("./data/routers/projectRouters");

const server = express();

server.use(express.json());
server.use("/api", projectRouters);

server.use("/", (req, res) => {
  res.send("<h2>Server is working and happy</h2>");
});

module.exports = server;
