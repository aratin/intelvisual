var keystone = require('keystone'),
	Types = keystone.Field.Types;

var Differentiator = new keystone.List('Differentiator', {
	autokey: { from: 'name', path: 'key' }
});

Differentiator.add({
	image: {type:Types.CloudinaryImage},
	text: {type: Types.Textarea, initial: true },
	
	 subText: {type:String },
	 shortText: {type: Types.Textarea, initial: true },
	 image1: {type:Types.CloudinaryImage},
	// shortStringText: {type:String },
	// longStringText: {type: Types.Textarea, initial: true },
	// differentiatorSubStringImage: {type:Types.CloudinaryImage},
	// textLong: {type:String },
	// differentiatorLongStringText: {type: Types.Textarea, initial: true },
	// differentiatorSubtextImage: {type:Types.CloudinaryImage},
	// differentiatorTextLong: {type:String },
	// heading:{type:String},
});

/** 
	Registration
	============
*/
Differentiator.addPattern('standard meta');
Differentiator.register();
