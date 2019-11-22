$(document).ready(function() { //make sure nothing happens until page fully loads - wrap around everything
	var elements = $('#firstDiv');
	//$ says I'm using jquery - neeed to specify index - pulls array
	console.log(elements[0]);

	var element2 = document.getElementById('firstDiv');
	//long way
	console.log(element2);

	//on click, do something

	$('#myButton').click(function(event) {
		console.log($(this));
		this.innerHTML = "Changed the button content desi yo!"

		var newElement = "<div>Adding divs like it's our job!</div>";
		var parentElement =$(this).parent();

		$(parentElement).append(newElement);
		//anytime you use a piece that is exclusive to jquery, you must call jquery

		$(this).addClass('newClass');

		$(elements).removeClass('blueDiv'); //this is my dark mode light switch!!!.toggleClass()
	 });

		

	//or 

	//$('#myButton').on('click', function(event){
	//	this.innerHTML = "Changed the button content desi yo!"
	//});




});
