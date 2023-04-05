
"use strict";

/*** Rechner */
/*
0. a+b | a-b | a*b | a/b  --> Ergebnis c 

1. Dateneingabe + -überprüfung :
2. Auswahl Rechenart : 
3. Fkt. Grundrechenarten : check!
4. Ausgabe in Konsole : check!
*/




// Konstanten
const ERROR_STR_DIV = "Division durch 0 nicht möglich!";
const ERROR_STR_GEN = "Irgendetwas ging schief!"




// module: division a / b |  test:
// output(divide(4,2));
// output(divide(3,2));
// output(divide(3,-2));
// output(divide(3,0));
function divide(a,b) {

	// if (b == 0)  {
	// 	return ERROR_STR_DIV;
	// } else {
	// 	return a / b;
	// }

	if (b == 0)  {
		return ERROR_STR_DIV;
	} 
	
	return a / b;
	
}

// module: multiplication a * b |  test:
// output(multiply(3,2));
// output(multiply(3,-2));
// output(multiply(3,0));
function multiply(a,b) {
	return a * b;
}

// module: subtraction a - b |  test:
// output(subtract(3,2));
// output(subtract(3,-2));
// output(subtract(3,0));
function subtract(a,b) {
	return a - b;
}

// module: addition a + b |  test:
// output(add(2,2));
// output(add(2,-2));
// output(add(2,0));
function add(a,b) {
	return a + b;
}

// module: output | test:
// output("hello");
// output(2);
function output(outputData) {
	console.log(outputData);
}
  