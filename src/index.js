var http = require("http");

var server = http.createServer(
    function(request, response) {
        if(request.url === "/"){
            response.writeHead(200, {"Content-Type": "text/html"});
            response.write("<html><body><p>Ella no te ama</p></body></html>");
            response.end();
        } else if(request.url === "/seguro") {
            response.writeHead(200, {"Content-Type": "text/html"});
            response.write("<html><body><p>Asies amiguito</p></body></html>");
            response.end();
        }else {
            response.writeHead(404, {"Content-Type": "text/html"});
            response.write("<html><body><p>NOT FOUND</p></body></html>");
            response.end();
        } 
    }

);

server.listen(4000);
console.log("running on 4000");