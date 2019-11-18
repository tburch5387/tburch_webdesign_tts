var myFirstString = "We're doing it!";
var myFirstNumber = 13; //javascript comment
var myFirstBoolean = false;

console.log(myFirstNumber); //log for value

//number swap
myFirstNumber = 12;

console.log(myFirstNumber); //check again

//Equations

var x = 5;
var y = 134;
var z = 57;

var sum1 = x * y;
console.log(sum1);

var sum2 = (y - (sum1 * z)) / x;

console.log(sum2);

if (x > y) {
	console.log('X is greater than Y')
} else {
	console.log('Y is greater than X')
}


// in the case of required form fields
if (x.value && y.value && z.value) {
	console.log('button is clickable');
} else {
	console.log('please fill in all required fields');
}