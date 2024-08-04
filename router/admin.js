const express = require("express");
const routes = express.Router();

routes.get("/add-product", (req, res, next) => {
  res.send(
    "<html><head><title>form</title></head><body><form action='/admin/product' method='POST'><input type='text' name='message'><input type='number' name='size'><button type='submit'>add</button></form></body></html>"
  );
});
routes.post("/product", (req, res) => {
  console.log(req.body);
  res.redirect("/");
});

module.exports = routes;
