var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var random=document.getElementById("randomise");

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var colorx = '#';
  var colory = '#';
  for (var i = 0; i < 6; i++) {
    colorx += letters[Math.floor(Math.random() * 16)];
  }
  for (var i = 0; i < 6; i++) {
    colory += letters[Math.floor(Math.random() * 16)];
  }
  color1.value=colorx;
  color2.value=colory;
  setGradient();
}


random.addEventListener("click",getRandomColor);
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);