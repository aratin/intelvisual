var _ = require('underscore'),
	keystone = require('keystone'),
	Types = keystone.Field.Types;

/**
 * Users
 * =====
 */

var Enquiry = new keystone.List('Enquiry', {
	// use nodelete to prevent people from deleting the demo admin user
	nodelete: true
});

Enquiry.add({
	name: { type: Types.Name, required: true, index: true },
	email: { type: Types.Email, initial: true, required: true, index: true },
	messagesubject: { type: Types.Textarea, initial: true },
	messagetext:{ type: Types.Textarea, initial: true },
	isProtected: { type: Boolean, noedit: false },
});

// // Provide access to Keystone
// Enquiry.schema.virtual('canAccessKeystone').get(function() {
// 	return this.isAdmin;
// });

/**
 * Registration
 */

Enquiry.addPattern('standard meta');
Enquiry.defaultColumns = 'name, email';
Enquiry.register();
