var express = require('express');
var app = express();
var morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');


// configuration
app.use(express.static(__dirname + '/public'));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({'extended': 'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json({type: 'application/vnd.api+json'}));
app.use(methodOverride());


// routes =================================

// application -------------------------------------
app.get("/testGridData", function(req, res){
    request(options, function(error, response, body){
        if(error){
            console.log(error);
        }
        res.send(body);
    });
});

app.get("/home", function(req,res){
    res.sendFile(__dirname + '/public/index.html');
});

app.listen(7060);
console.log('App listening on port 7060');