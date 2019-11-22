//create a function that says "hello!"

function sayHello(phraseToPrint) {
	console.log(phraseToPrint);
}

sayHello('Hello!');

sayHello('goodbye');

//challenge 3
//create a billAmount variable
//create a gratuity function that multiplies billAmount by 20% to return gratuity amount
//create function totalWithGrat
//add gratuity to original value

var billAmount = 50;

function gratuity() {
	return billAmount * .2;
}

function totalWithGrat(amount) {
	return amount + gratuity();
}

console.log('Your total, including gratuity is: $' + totalWithGrat(billAmount));



