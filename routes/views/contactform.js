var keystone = require('keystone'),
	Enquiry = keystone.list('Enquiry'),
	Navbar = keystone.list('Navbar'),
    MenuList = keystone.list('Menu'),
	FooterList = keystone.list('Footer'),
    CompanyInfoListMenu = keystone.list('CompanyInfoListMenu'),
   //- Message = keystone.list('Message');

exports = module.exports = function(req, res) {
	var view = new keystone.View(req, res),
		locals = res.locals;
	
		locals.section = 'contactform';
		locals.formData = req.body || {};
		locals.validationErrors = {};
		locals.enquirySubmitted = false;
		locals.data = [];
		
	view.on('post', { action: 'contact' }, function(next) {
		new keystone.Email('enquiry-notification').send({
	    subject: 'Test mandrill subject',
	    to: 'arati.nankar@planetria.com',
	    fromName: 'Mandrill',
	    fromEmail: 'from@server.com',
	    // other locals for the email template also go here
		});

		var application = new Enquiry.model(),
		updater = application.getUpdateHandler(req);
		
		updater.process(req.body, {
			flashErrors: true
		}, function(err) {
			if (err) {
				locals.validationErrors = err.errors;
			} else {
				locals.enquirySubmitted = true;
			}
			next();
		});
		
	});

	// Load the current Enquiry
	view.on('init', function(next) {
		var q = Enquiry.model.find();
		q.exec(function(err, results) {
			locals.data.enquiries = results;
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
	view.render('contactform', {
		section: 'contactform',
	});
	
}
