var keystone = require('keystone');
var News2 = keystone.list('News2');
var Navbar = keystone.list('Navbar');
var MenuList = keystone.list('Menu');
var FooterList = keystone.list('Footer');
var CompanyInfoListMenu = keystone.list('CompanyInfoListMenu');
//var Message = keystone.list('Message');

exports = module.exports = function(req, res) {
	var view = new keystone.View(req, res),
		locals = res.locals;

	// Init locals
		locals.section = 'news2';
		locals.data = [];

	// Load the current News2
	view.on('init', function(next) {
		var q = News2.model.find();
		q.exec(function(err, results) {
			locals.data.news2s = results;
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

	// Load the current CompanyInfoListMenu
	view.on('init', function(next) {
		var q = CompanyInfoListMenu.model.find();
		q.exec(function(err, results) {
			locals.data.companyinfolistmenus = results;
			next(err);
		});
	});

	// // Load the current Message
	// view.on('init', function(next) {
	// 	var q = Message.model.find();
	// 	q.exec(function(err, results) {
	// 		locals.data.messages = results;
	// 		next(err);
	// 	});
	// });
	// Render the view
	view.render('news2');
}