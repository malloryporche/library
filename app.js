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
var router = function(nav) {

var books =[
	{
		title: 'War and Peace',
		genre: 'Historical Fiction',
		author: 'Some Author',
		read: false
	},
	{
		title: 'Childhood',
		genre: 'Biography',
		author: 'Lev Nikolayevich Tolstoy',
		read: false
	},
	{
		title: 'Life On The Mississippi',
		genre: 'History',
		author: 'Mark Twain',
		read: false
	},
	{
		title: 'Les Miserables',
		genre: 'Historical Fiction',
		author: 'Victor Hugo',
		read: false
	},
	{
		title: 'The Time Machine',
		genre: 'Science Fiction',
		author: 'H.G. Wells',
		read: false
	}
];

	bookRouter.route('/')
		.get(function(req, res){
			res.render('bookListView', {
				title: 'Books',
				nav: nav,
				books: books
			});
		});

	bookRouter.route('/:id')
		.get(function(req, res){
			var id = req.params.id;
			res.render('bookView', {
				title: 'Books',
				nav: nav,
				book: books[id]
			});
	});

	return bookRouter;
}

app.use('/Books', bookRouter);


//Express taking a request from the browser at the root and sending something back
app.get('/', function(req, res){
	res.render('index', {
		title: 'Storystrap',
		nav: nav
	});
});

app.get('/books', function(req, res){
	res.render('booklistView', {
		title: 'Book Lists'
	});
});

//Creating instance of the express app and listen on a specific port
app.listen(port, function(err){
	console.log('running server on port '+ port);
});

