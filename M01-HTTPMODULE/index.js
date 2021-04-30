const http = require("http");

let html = '<h1>Modul HTTP Mobile dan Web</h1> <p>Sherina</p> <p>181110727</p> <p>MW-B Sore</p>'
http
    .createServer(function(req, res){
        res.writeHead(200,{"Content-Type" : "text/html"});
        res.write(html);
        res.end();
    })
    .listen(3000);