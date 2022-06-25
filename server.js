const http = require("http");

// Create a server
http
  .createServer(function (request, response) {
    // Send the HTTP header field "Content-type" with value "text/html"
    response.writeHead(200, { "Content-Type": " text/html" });

    // Send the response body as "Hello World"
    response.end("Hello World\n");
  })
  .listen(8080);
