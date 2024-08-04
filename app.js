const express = require("express");
const bodyParser = require("body-parser");
const admin = require("./router/admin");
const shop = require("./router/shop");

app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use("/admin", admin);
app.use(shop);

app.use((req, res, next) => {
  res.status(405).send("<h1>PAGE NOT FOUND</h1>");
});
app.listen(3000);
