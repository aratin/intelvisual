var keystone = require('keystone'),
	Types = keystone.Field.Types;

var Companyprofile = new keystone.List('Companyprofile', {
	autokey: { from: 'name', path: 'key' }
});

Companyprofile.add({
	image: { type: Types.CloudinaryImage},
	text: {type: String},
	subtext: {type: String},
	shortString: { type: String },
	longString: { type: String },
	subString: { type: String },
	subStringText: { type: String },
	subShortText: { type: String },
	subheading: { type: String },
	subStringText1: { type: String },
	subheadingtext: { type: String },
	subStringText2: { type: String },
	heading:{type:String},
});

/** 
	Registration
	============
*/
Companyprofile.addPattern('standard meta');
Companyprofile.register();
