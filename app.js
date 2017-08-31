var express = require("express");
var app = express();
var router = express.Router();
var ejs = require("ejs");

app.set('port', (process.env.PORT || 2000));

app.use(express.static(__dirname + '/public')); 

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get("/", function(req, res) {
    res.render("index");
});

app.get("*", function(req, res) {
    res.render("index");
});

// tell express to listen for requests.
app.listen(app.get('port'), function(){
	console.log("server has started");
});


