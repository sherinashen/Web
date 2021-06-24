var create_db = 'CREATE DATABASE IF NOT EXISTS ebook'
connection.query(create_db, function(err,result){
    if(err){
        console.log(err);
    }
    else{
        console.log(result);
    }
})

var mysql = require('mysql');
var connection = mysql.createConnection({
    host : 'localhost',
    user : 'me',
    password : 'secret',
    database : 'my_db'
});

connection.connect();
connection.query('SELECT 1 + 1 AS solution', function(error,results,fields){
    if(error) throw error;
    console.log('The solution is : ', results[0].solution);
});

connection.end();