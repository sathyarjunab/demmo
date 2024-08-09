const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

const errorController = require("./controllers/error");
const sequelize = require("./util/database");
const Products = require("./models/product");
const User = require("./models/user");

const app = express();

let port = 3000;

app.set("view engine", "ejs");
app.set("views", "views");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const Product = require("./models/product");
const { FORCE } = require("sequelize/lib/index-hints");
const { name } = require("ejs");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use((req, res, next) => {
  User.findByPk(1)
    .then((user) => {
      req.user = user;
      next();
    })
    .catch((err) => {
      cosnmoel.log(err);
    });
});

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

Products.belongsTo(User, { constrane: true, onDelete: "CASCADE" });
User.hasMany(Products);

sequelize
  .sync()
  .then((result) => {
    return User.findByPk(1);
  })
  .then((result) => {
    if (!result) {
      return User.create({ name: "sat", email: "sat@da" });
    }
    return result;
  })
  .then((result) => {
    app.listen(port, () => {
      console.log("connected");
    });
  })
  .catch((err) => {
    console.log(err);
  });
