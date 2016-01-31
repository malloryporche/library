//Pulls in a package called Express via Node,
//doesn't give us the ability to do anything
var express = require('express');

var app = express();

var port = 5000;

//Setup public directory as a static directory,
//and the view directory as a static directory to setup Middleware
//Express server will serve these files
app.use(express.static('public'));
app.use(express.static('src/views'));


//Express taking a request from the browser at the root and sending something back
app.get('/', function(req, res){
	res.send('Hello world!');
})

app.get('/books', function(req, res){
	res.send('Hello books!');
})

//Creating instance of the express app and listen on a specific port
app.listen(port, function(err){
	console.log('running server on port '+ port);
});

