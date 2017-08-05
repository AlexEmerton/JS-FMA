function prForm(){
	var output = '';
	
	var collection = ['age', 'BMI', 'genetics', 'diet'];
	var score = 0;
	var factors = [];
	
	for (var j = 0, length_0 = collection.length; j < length_0; j++) {
		var radio = document.getElementsByName(collection[j]);
		
		for (var i = 0, length_1 = radio.length; i < length_1; i++) {
			if (radio[i].checked) {
				
				
				if ((Number(radio[i].value) >= 10)){
					factors.push(collection[j]);
				}
				
				score += Number(radio[i].value);
				
				//alert((collection[j])[i].value);

				// only one radio can be logically checked
				break;
			}
		}
	}
	document.getElementById('result').style.visibility = 'visible';
	
	var low = "<h2>Your Result</h2>Your results show that you currently have a low risk of " + 
					"developing diabetes. However, it is important that you " + 
					"maintain a healthy lifestyle in terms of diet and exercise."
					
	var medium = 	"<h2>Your Result</h2>Your results show that you currently have a medium risk of " + 
							"developing diabetes. For more information on your risk " + 
							"factors, and what to do about them, please visit our diabetes " +
							"advice website at http://www.zha.org.zd."
	
	var high = "<h2>Your Result</h2>Your results show that you currently have a HIGH risk of " +
					"developing diabetes. Your main risk factors are your " +
					 factors.slice(0, -1).join(', ') + " and your " + factors[factors.length - 1] + 
					". We advise that you contact the Health Authority to " + 
					"discuss your risk factors as soon as you can. Please fill in our " +
					"<a href=\"contactform.html\">contact form</a> and a member of the Health Authority Diabetes " +
					"Team will be in contact with you."

	if (score < 16){
		output = low;
	} 
	else if (score < 26) {
		output = medium;
	}
	else {
		output = high;
	}
	
	document.getElementById("result").innerHTML = output;
}

