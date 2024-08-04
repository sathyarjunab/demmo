const express = require("express");
app = express();

app.use((req, res, next) => {
  console.log("hello world");
  next();
});
app.use((req, res, next) => {
  console.log("next middelware");
  res.send("<h1>HELLO WORLD</h1>");
});

app.listen(3000);
