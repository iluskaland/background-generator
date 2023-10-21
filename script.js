var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomButton = document.getElementById("random");
var resetButton = document.getElementById("reset");

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

// 1. Write code so that the colour inputs match the background generated on the first page load. 
// 2. Display the initial CSS linear gradient property on page load.
function pageLoad() {
	color1.value = "#ff0000";
	color2.value = "#ffff00";
	setGradient();
	css.textContent = body.style.background + ";";
}

/*My first try: with rgb numbers.
It was a good solution, but I would need another function instead of setGradient, that would mean DRY is not an option anymore*/
/*function random() {
	var randomNumber = Math.floor((Math.random() * 256) + 0);
	return randomNumber;
}

function randomRgb() {
	var rgb = "rgb"+ "(" +random() + ", " + random() + ", " + random() + ")" + ";";
	console.log(rgb);
}*/

/*So I needed another one, with hex numbers. This solution random() below is something I had to searched for: https://www.geeksforgeeks.org/javascript-generate-random-hex-codes-color/ */
// 3. BONUS: Add a random button which generates two random numbers for the colour inputs.
function random() {
	// Storing all letter and digit combinations for html color code
	let letters = "0123456789ABCDEF";

	// HTML color code starts with #
	let color = '#';

	// Generating 6 times as HTML color code 
	// consist of 6 letter or digits
	for (let i = 0; i < 6; i++)
		color += letters[(Math.floor(Math.random() * 16))];

	return color;
}

function setRandom() {
	color1.value = random();
	color2.value = random();
	setGradient();
	css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
window.addEventListener("load", pageLoad);
randomButton.addEventListener("click", setRandom);
resetButton.addEventListener("click", pageLoad);