const bodyParser = require("body-parser");

var data = bodyParser.urlencoded({extended: false});
app.post("/api/datamhs",data,function(req,res){
    res.send(req.body);
});