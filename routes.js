const fs = require("fs");
let pack;
const reqas = (req, res) => {
  const method = req.method;
  if (req.url === "/") {
    res.setHeader("content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>some name</title></head>");
    res.write(
      `<body><form action='/message' method='POST'>${pack}<br><input type="text" name='message'><button type='submit'>submit</button></form></body>`
    );
    res.write("</html>");
    return res.end();
  }

  if (req.url === "/message" && method === "POST") {
    const data = [];
    req.on("data", (chunk) => {
      data.push(chunk);
    });
    return req.on("end", () => {
      const parsedData = Buffer.concat(data).toString();
      let message = parsedData.split("=")[1];
      fs.writeFile("info.txt", `${message}`, (err) => {
        pack = message;
        res.statusCode = 302;
        res.setHeader("Location", "/");
        return res.end();
      });
    });
  }

  res.setHeader("content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>some name</title></head>");
  res.write("<body>hello world</body>");
  res.write("</html>");
};

module.exports = reqas;
