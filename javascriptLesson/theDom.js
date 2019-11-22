var username = document.getElementById('userName'); //get username input and assign to var username
console.log(username);

//get value of username on sbmit
function getValueofInput () {
	if (username) {
	console.log(username.value);
	}
}
//use this on my site!!! clear placeholder text!! make class and we just use one script to do them all
function clearText () {
	document.getElementById('userName').placeholder = "";
}

//getting based on tag and class

var inputs = document.getElementsByTagName('input');
console.log('inputs', inputs);

var errorClass = document.getElementsByClassName('error');
console.log('error input', errorClass);

//getting based on query selector

var firstButton = document.querySelector('button');
console.log('buttons', firstButton);


//but use query selector instead??
var errorClass2 = document.querySelector('.error');
console.log('error inputs 2', errorClass2);

//grab the children of the UL
var list = document.querySelector('ul').children;
console.log('children', list);


//target first li and change text
function changeInnerHTML() {
	list[0].innerHTML = "Click ME!";
}

//log siblings and parent
var selectedItem = document.querySelector('li.selected');
console.log('selectedItem', selectedItem);

var firstItem = selectedItem.previousElementSibling;
console.log('firstItem', firstItem);

var lastItem = selectedItem.nextElementSibling;
console.log('lastItem', lastItem);

var parentItem = selectedItem.parentElement;
console.log('parent', parentItem);


