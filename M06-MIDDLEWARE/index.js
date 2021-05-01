var express = require("express");
var app = express();
var bodyParser = require("body-parser");
//https://github.com/expressjs/morgan
var logger = require("morgan");

const mymiddleware = (req,res,next)=>{
    if(req.params.umur >= 4){
        console.log("Boleh masuk");
        const err = {
            status: "Umur anda telah mencukupi untuk masuk ke area permainan",
            data : "karena anda telah berusia " + req.params.umur + "tahun", 
        };
        next(err);
    }else{
        console.log("Dilarang memasuki area permainan");
        const err = {
            status: " Dilarang masuk memasuki area permainan ",
            data : "karena anda masih berusia " + req.params.umur + "tahun",
        };
        next(err);
    }
}
app.get('/api/:umur/:nama',mymiddleware,function(req,res){
    res.statusCode = 200;
    res.setHeader("Content-Type","text/plain");
    res.send(req.params);
});
app.use((error,req,res,next)=>{
    res.send(error);
});

app.listen(4000,function(){
    console.log("Server run");
})

