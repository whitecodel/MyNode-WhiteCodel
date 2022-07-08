const http = require("http");

// Create a server
http
  .createServer(function (request, response) {
    // // Send the HTTP header field "Content-type" with value "text/html"
    response.writeHead(200, { "Content-Type": "text/html" });

    // Send the response body as "Hello World"
    switch (request.url) {
      case "/x":
        response.end("X Hello World\n");
        break;
      case "/y":
        response.end("Y Hello World\n");
        break;
      case "/z":
        response.end("Z Hello World\n");
        break;
      default:
        response.end("Hello World\n");
        break;
    }
  })
  .listen(8080);
