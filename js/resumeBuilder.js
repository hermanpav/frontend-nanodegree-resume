/*
This is empty on purpose! Your code to build the resume will go here.
 

var firstName = "Pavel";
var age = 31;
console.log(firstName);
 
var funThoughts = awesomeThoughts.replace("awesome", "fun");

console.log(awesomeThoughts);
console.log(funThoughts);

$('#main').append(funThoughts);


var formattedName = HTMLheaderName.replace("%data%","Pavel Herman");
var formattedRole = HTMLheaderRole.replace("%data%", "M&A");

$("#main").prepend(formattedRole);
$("#main").prepend(formattedName);


var s = "audacity";
var udacityizer = function(s) {  
    // Right now, the variable s === "audacity"
    // Manipulate s to make it equal to "Udacity"
    // Your code goes here!
    s = s.slice(2);
    s = "U" + s;
    
    return s;
};

// Did your code work? The line below will tell you!
console.log(udacityizer(s));


var numbers = [7, 5, 23, 11];
console.log(numbers.length);

var lastNumber = numbers[numbers.length-1];
console.log(lastNumber);


var sampleArray = [0,0,7];


var incrementLastArrayElement = function(_array) {
    var newArray = [];
    newArray = _array;
    var lastNumber = newArray.pop();
    newArray.push(lastNumber+1);
    
    // Don't delete this line!
    
    return newArray;
};

// Did your code work? The line below will tell you!
console.log(incrementLastArrayElement(sampleArray));
*/

/*
var name = "AlbERt EINstEiN";
function nameChanger(oldName) {
    var finalName = oldName;   
	var names = finalName.split(' ');
	var firstName = names[0].toLowerCase();
	firstName = firstName[0].toUpperCase() + firstName.slice(1);
	var lastName = names[1].toUpperCase();
	finalName = firstName + " " + lastName;    
    return finalName;
};
console.log(nameChanger(name));
*/

/*
var bio = {
	"name" : "Pavel Herman",
	"role" : "M&A",
	"contact info" : "herman.pav@gmail.com",
	"skills" : ["valuation","negotiation","due diligence"],
	"welcome message" : "Hello everyone",
	"pic" : "images/pavel.jpg"
};

$("#main").prepend(bio.pic);
$("#main").prepend(bio.email);
$("#main").prepend(bio.role);
$("#main").prepend(bio.name);
*/

/*
var work = {};
work.position = "M&A manager";
work.years = 2.5;

var education = {};
education["school"] = "CVUT";
education["years"] = 6;

$("#main").append(work["position"]);
$("#main").append(work.years);
$("#main").append(education.school);
*/

var education = {
	"schools" : [
	 {
	 	"name" : "CVUT",
	 	"city" : "Prague",
	 	"major" : "Economics",
	 	"graduation" : 2010
	 },
	 {
		"name" : "Chung Hua University",
	 	"city" : "Hsinchu",
	 	"major" : "exchange program-mandarin",
	 	"graduation" : 2008
	 }
	]
}
$("#main").append(education.schools[0].name);