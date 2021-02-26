window.calculateSumListener = function calculateSumListener() {
	//Return the value of the input #firstNumber
	let stringA = parseInt(document.getElementById("firstNumber").value);
	//Return the value of the input #secondNumber
	let stringB = parseInt(document.getElementById("secondNumber").value);

	//your code goes here
	let result = stringA + stringB;
	document.getElementById("resultNumber").value = result;
};
