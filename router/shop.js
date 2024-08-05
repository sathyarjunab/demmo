const express = require("express");
const path = require("path");
const rootDir = require("../util/path");

const routes = express.Router();

routes.get("/", (req, res) => {
  res.sendFile(path.join(rootDir, "views", "shop.html"));
});

module.exports = routes;
