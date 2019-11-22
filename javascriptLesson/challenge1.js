// step 1 define a variable that store a number of cups consumed
var cups = 2;

// step 2 - if/else - if person has had less than 3 cups of coffee, "Yes, I'll take another" else, "I think I'm ok for now"
// use console.log() to log a message with results 
if (cups<3) {
	console.log("Yes, I'll take another!");
} 
	else {
		console.log("I think I'm ok for now.")
	}

// create variables
var temp = 75;
var precip = "raining";
var indoors = "true";
//statement that outputs current temp
console.log("The temperature is "+temp+" degrees");
// ifelse statements for swimming decisions

if (temp >= 80 && precip !== "raining" && precip !== "snowing") {
	console.log("Time to swim!");

} 
	else if (indoors === "true") {
			console.log("Time to swim!")
		}
	
	else { 
		console.log("Not a good time to swim!");

	}
