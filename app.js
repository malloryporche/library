//Pulls in a package called Express via Node,
//doesn't give us the ability to do anything
var express = require('express');

var app = express();

var port = process.env.PORT || 5000;

var nav = [{
	Link:'/Books', 
	Text: 'Books'
	}, {
	Link: '/Authors', 
	Text: 'Authors'
	}];

var bookRouter = require('./src/routes/bookRoutes')(nav);

//Setup public directory as a static directory,
//and the view directory as a static directory to setup Middleware
//Express server will serve these files
app.use(express.static('public'));
app.set('views', './src/views');

app.set('view engine', 'ejs');

app.use('/Books', bookRouter);


//Express taking a request from the browser at the root and sending something back
app.get('/', function(req, res){
	res.render('index', {
		title: 'MyLibrary',
		nav: nav
	});
});

app.get('/books', function(req, res){
	res.render('booklistView', {
		title: 'Book Lists'
	});
});

app.get('/authors', function(req, res) {
	res.render('authorView', {
		title: 'Authors'
	})
})
//Creating instance of the express app and listen on a specific port
app.listen(port, function(err){
	console.log('running server on port '+ port);
});

