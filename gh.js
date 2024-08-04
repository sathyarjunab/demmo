const express = require("express");
const bodyParser = require("body-parser");
app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use("/add-product", (req, res, next) => {
  res.send(
    "<html><head><title>form</title></head><body><form action='/product' method='POST'><input type='text'><button type='submit'>add</button></form></body></html>"
  );
});
app.post("/product", (req, res) => {
  console.log(req.body);
  res.redirect("/add-product");
});
app.use("/", (req, res) => {
  res.send("<h1>hello world</h1>");
});
app.listen(3000);
