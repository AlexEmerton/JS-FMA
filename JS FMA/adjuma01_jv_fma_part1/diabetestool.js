function prForm(){
	
	var collection = ['age', 'BMI', 'genetics', 'diet'];
	var score = 0;
	var factors = [];
	
	//Calculating the score and adding items from collection to the risk factors
	for (var j = 0, length_0 = collection.length; j < length_0; j++) {
		var radio = document.getElementsByName(collection[j]);
		
		for (var i = 0, length_1 = radio.length; i < length_1; i++) {
			if (radio[i].checked) {
				
				
				if ((Number(radio[i].value) >= 10)){
					factors.push(collection[j]);
				}
				
				score += Number(radio[i].value);

				// only one radio can be logically checked
				break;
			}
		}
	}
	
	document.getElementById('result').style.visibility = 'visible';
	
	document.getElementById("result").innerHTML = getOutputMSG(score, factors);;
}

function getOutputMSG(score, factors){
	
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
		return low;
	} 
	else if (score < 26) {
		return medium;
	}
	else {
		return high;
	}
}
