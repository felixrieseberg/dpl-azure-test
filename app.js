var http = require('http');
var fs = require('fs');

var server = http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});

  if (fs.existsSync('skip_cleanup')) {
    response.end('Skipped: true');
  } else {
    response.end('Skipped: false');
  }
});

server.listen(process.env.PORT || 8080);