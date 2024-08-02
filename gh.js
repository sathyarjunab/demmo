const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.setHeader("content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>some name</title></head>");
    res.write("<p>Welcome</p>");
    res.write("</html>");
  } else if (req.url == "/home") {
    res.setHeader("content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>some name</title></head>");
    res.write("<p>Welcome home</p>");
    res.write("</html>");
  } else if (req.url == "/about") {
    res.setHeader("content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>some name</title></head>");
    res.write("<p>Welcome to About Us page</p>");
    res.write("</html>");
  } else if (req.url == "/node") {
    res.setHeader("content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>some name</title></head>");
    res.write("<p> Welcome to my Node Js project</p>");
    res.write("</html>");
  }
});

server.listen(3000);
