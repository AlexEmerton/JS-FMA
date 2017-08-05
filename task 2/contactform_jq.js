$(document).ready(function () {
	
	$("#first_name").focus();
	
	$("#form_cont").validate({
	rules: {
		first_name: {
			required: true,
			valid_first_name: true
		},
		last_name: {
			required: true,
			valid_last_name: true
		},
		email: {
			required: true,
			valid_email: true
		},
		ha_number: {
			required: true,
			valid_ha_number: true
		},
		tl_number: {
			valid_tl_number: true
		}
	},
	messages: {
		first_name: {
			required: "* You must enter a first name"
		},
		last_name: {
			required: "* You must enter a last name"
		},
		email: {
			required: "* You must enter an email address"
		},
		ha_number: {
			required: "* You must enter a Health Authority Number"
		}
	}
	});
	
	jQuery.validator.addMethod("valid_email", function(value, element) {
		// Validation carried out using the regex string
		// The original author of the regex string is the stackoverflow.com user - rnevius
		// The source is available at: https://stackoverflow.com/questions/46155/how-to-validate-email-address-in-javascript
		
		var rX = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/igm;
		
		return this.optional(element) || rX.test(value);
	}, "Please enter a valid email address");

	jQuery.validator.addMethod("valid_last_name", function(value, element) {
		var rX = /^[A-Za-z]{1,}[\-]{0,1}[A-Za-z]{0,}$/igm;
		
		return this.optional(element) || rX.test(value);
		
	}, 'Please enter a valid last name');
	
	jQuery.validator.addMethod("valid_first_name", function(value, element) {
		var rX = /^[A-Za-z]{1,}$/igm;
	
		return this.optional(element) || rX.test(value);
		
	}, 'Please enter a valid first name');
	
	jQuery.validator.addMethod("valid_ha_number", function(value, element) {
		var rX = /^[Z]+[H]+[A]+[0-9]{6}$/igm;
	
		return this.optional(element) || rX.test(value);
		
	}, 'Please enter a valid HA number');
	
	jQuery.validator.addMethod("valid_tl_number", function(value, element) {
		var rX = /^[0-9]{11}$/igm;
	
		return this.optional(element) || rX.test(value);
		
	}, 'Please enter a valid telephone number');

});