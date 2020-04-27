//importaciones de módulos de tipo core, esto es más de lado del servidor
var http = require("http");

//importaciones de módulos locales, que son lo que se aporvechan para las funciones que se desarrolan. 
var log = require('./modules/my-log');
var consts = require('./utils/consts')
var firebase = require('../libs/firebase')

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
        }else if(request.url === "/info") {
            var result= log.info(request.url)
            response.writeHead(200, {"Content-Type": "text/html"});
            response.write(result);
            response.end();
        }else if(request.url === "/error") {
            var result= log.error(request.url)
            response.writeHead(200, {"Content-Type": "text/html"});
            response.write(result);
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