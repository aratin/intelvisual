var keystone = require('keystone');
var Socialmediaanalyse = keystone.list('Socialmediaanalyse');
var Navbar = keystone.list('Navbar');
var MenuList = keystone.list('Menu');
var FooterList = keystone.list('Footer');
var Listingmenu = keystone.list('Listingmenu');
//var Message = keystone.list('Message');


exports = module.exports = function(req, res) {
	var view = new keystone.View(req, res),
		locals = res.locals;

	// Init locals
		locals.section = 'socialmediaanalyse';
		locals.data = [];

	// Load the current Socialmediaanalyse
	view.on('init', function(next) {
		var q = Socialmediaanalyse.model.find();
		q.exec(function(err, results) {
			locals.data.socialmediaanalyses = results;
			console.log('results',results);
			next(err);
		});
	});

	// Load the current Navbar
	view.on('init', function(next) {
		var q = Navbar.model.find();
		q.exec(function(err, results) {
			locals.data.navbars = results;
			next(err);
		});
	});

	// Load the current MenuList
	view.on('init', function(next) {
		var q = MenuList.model.find();
		q.exec(function(err, results) {
   			locals.data.menus = results;
			next(err);
		});
	});

	// Load the current FooterList
	view.on('init', function(next) {
		var q = FooterList.model.find();
		q.exec(function(err, results) {
   			locals.data.footers = results;
			next(err);
		});
	});

	// Load the current ListingMenu
	view.on('init', function(next) {
		var q = Listingmenu.model.find();
		q.exec(function(err, results) {
			locals.data.listingmenus = results;
			next(err);
		});
	});

	// Load the current Message
	// view.on('init', function(next) {
	// 	var q = Message.model.find();
	// 	q.exec(function(err, results) {
	// 		locals.data.messages = results;
	// 		next(err);
	// 	});
	// });
	
	// Render the view
	view.render('socialmediaanalyse');
}