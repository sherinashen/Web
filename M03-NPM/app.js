var express = require("express");
var server = express();

var logger = require("morgan");
server.use(logger("dev"));
server.use(express.static(__dirname + "/publik"));
server.listen(4000,function(){
    console.log("Server run");
})

app.get("/api/cari", function(req,res,next){
    var nama = req.query.nama;
    console.log('Nama : ${nama}');
    var nama = req.query.umur;
    console.log('Umur : ${umur}');
    res.send(umur);
});
