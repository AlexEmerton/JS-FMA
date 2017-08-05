window.onload = setFocus;

function setFocus(){
    document.getElementById("first_name").focus();
}

function emptyWarnings(){
	document.getElementById("f_name_val").innerHTML = "";
	document.getElementById("l_name_val").innerHTML = "";
	document.getElementById("ha_num_val").innerHTML = "";
	document.getElementById("email_val").innerHTML = "";
	document.getElementById("tl_number_val").innerHTML = "";
}

function validateForm() {
	// Removing the warning messages after submission
	emptyWarnings();
	
	var form_valid = true;
	
	var first_name = document.forms["form_cont"]["first_name"].value;
	var last_name = document.forms["form_cont"]["last_name"].value;
	var ha_number = document.forms["form_cont"]["ha_number"].value;
	var email = document.forms["form_cont"]["email"].value;
	var tl_number = document.forms["form_cont"]["tl_number"].value;
	
	// ///////////////// Input fields empty check
	
	if (checkEmpty(first_name)) {
		document.getElementById('f_name_val').style.visibility = 'visible';
		document.getElementById("f_name_val").innerHTML = "* You must enter a first name";
		form_valid = false;
	}
	
	if (checkEmpty(last_name)) {
		document.getElementById('l_name_val').style.visibility = 'visible';
		document.getElementById("l_name_val").innerHTML = "* You must enter a last name";
		form_valid = false;
	}
	if (checkEmpty(ha_number)) {
		document.getElementById('ha_num_val').style.visibility = 'visible';
		document.getElementById("ha_num_val").innerHTML = "* You must enter a Health Authority Number";
		form_valid = false;
	}
	if (checkEmpty(email)) {
		document.getElementById('email_val').style.visibility = 'visible';
		document.getElementById("email_val").innerHTML = "* You must enter an email address";
		form_valid = false;
	}
	// ///////////////// End of empty check
	
	
	// ///////////////// Input fields format check
	if(!checkEmpty(first_name) && !checkFNameFormat(first_name)){
		document.getElementById('f_name_val').style.visibility = 'visible';
		document.getElementById("f_name_val").innerHTML = "You must enter a correct first name";
		form_valid = false;
	}
	
	if(!checkEmpty(last_name) && !checkLNameFormat(last_name)){
		document.getElementById('l_name_val').style.visibility = 'visible';
		document.getElementById("l_name_val").innerHTML = "You must enter a correct last name";
		form_valid = false;
	}
	
	if(!checkEmpty(email) && !checkEmailFormat(email)){
		document.getElementById('email_val').style.visibility = 'visible';
		document.getElementById("email_val").innerHTML = "You must enter a correct email address";
		form_valid = false;
	}
	
	if(!checkEmpty(ha_number) && !checkHANFormat(ha_number)){
		document.getElementById('ha_num_val').style.visibility = 'visible';
		document.getElementById("ha_num_val").innerHTML = "You must enter a correct Health Authority Number";
		form_valid = false;
	}
	
	if(!checkEmpty(tl_number) && !checkTLFormat(tl_number)){
		document.getElementById('tl_number_val').style.visibility = 'visible';
		document.getElementById("tl_number_val").innerHTML = "You must enter a correct telephone number";
		form_valid = false;
	}
	// ///////////////// End of format check
}

function checkEmpty(target) {
	if (target == ""){
		return true;
	} else {
		return false;
	}
}

function checkEmailFormat(target){
	// Validation carried out using the regex string
	// The original author of the regex string is the stackoverflow.com user - rnevius
	// The source is available at: https://stackoverflow.com/questions/46155/how-to-validate-email-address-in-javascript
	
	var rX = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/igm;
	
	return rX.test(target);
}

function checkLNameFormat(target){
	var rX = /^[A-Za-z]{1,}[\-]{0,1}[A-Za-z]{0,}$/igm;
	
	return rX.test(target);
}

function checkFNameFormat(target){
	var rX = /^[A-Za-z]{1,}$/igm;
	
	return rX.test(target);
}

function checkHANFormat(target){
	var rX = /^[Z]+[H]+[A]+[0-9]{6}$/igm;
	
	return rX.test(target);
}

function checkTLFormat(target){
	var rX = /^[0-9]{11}$/igm;
	
	return rX.test(target);
}