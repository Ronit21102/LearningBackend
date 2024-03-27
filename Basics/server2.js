const http = require("http");
const fs = require("fs");

// Event listeners are not attached to every route by default. They are attached only when the
//  server logic executes the code block that handles the specific route (in this case, the /message POST request).
// The 'data' event listener gets triggered multiple times for larger data payloads, while the 'end' event listener gets triggered only once when all data has arrived.
const server = http.createServer((req, res) => {
  
  const url = req.url;
  const method = req.method;

  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>message me</title></head>");
    res.write(
      '<Body><form action="/message" method="POST"><input type="text" name="message"><Button type="submit">Submit</Button></Body>'
    );
    res.write("</html>");
    return res.end();
  }
  if (url === "/message" && method == "POST") {
    console.log("times");
    const body = [];
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });

    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      console.log(parsedBody);
      const message = parsedBody.split("=")[1];

      fs.writeFileSync("message.txt", message);
    });

    res.statusCode = 302;
    res.setHeader = ("Location", "/");
    return res.end();
  }
});

server.listen(8080);
