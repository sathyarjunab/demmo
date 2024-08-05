const express = require("express");
const path = require("path");
const rootDir = require("../util/path");

const routes = express.Router();

routes.get("/contactus", (req, res) => {
  res.sendFile(path.join(rootDir, "views", "contactUs.html"));
});

routes.post("/success", (req, res) => {
  res.send("<h1>Form successfuly filled</h1>");
});
module.exports = routes;
