const express = require("express");

const routes = express.Router();

routes.get("/", (req, res) => {
  res.send("<h1>hello world</h1>");
});

module.exports = routes;
