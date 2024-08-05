const express = require("express");
const path = require("path");

const rootDir = require("../util/path");
const routes = express.Router();

routes.get("/add-product", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "add-product.html"));
});
routes.post("/add-product", (req, res) => {
  console.log(req.body);
  res.redirect("/");
});

module.exports = routes;
