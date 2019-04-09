var colors =  generateRandomColors(6);
var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var goalColor = random();
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButtom = document.querySelector("#reset");


resetButtom.addEventListener("click",function(){
     // generate new colors 
     colors = generateRandomColors(6);
     // pick new random colors from array
     goalColor = random();
     // change color dos==isplay to match 
     colorDisplay.textContent = goalColor;
     // change colors of squares
     for (var i = 0; i < squares.length; i++) {
     	squares[i].style.backgroundColor = colors[i];
     }

});

colorDisplay.textContent = goalColor;

for (var i = 0; i < squares.length; i++) {
	// add initial colors to squres
	squares[i].style.backgroundColor = colors[i];

	// add click listeners to squares
    squares[i].addEventListener("click",function(){
    
    //grab color of the picked square 
    //then compare it to the goalColor
    var clickedColor = this.style.backgroundColor;
    if(clickedColor === goalColor){
    	messageDisplay.textContent = "Correct!";
    	changeColor(clickedColor);
    	h1.style.backgroundColor = clickedColor;
    }
    else{
    	this.style.backgroundColor = "#232323";
    	messageDisplay.textContent = "Try again!";
    }
    });
}

function changeColor(color){
	for (var i = 0; i < colors.length; i++) {
		squares[i].style.backgroundColor = color;
	}
}	

function random(){
	var randomNum = Math.floor(Math.random()*colors.length + 1)
	return colors[randomNum];
}


function generateRandomColors(num) {
	//make an array
	var arr = [];
	//add num random colors to arr
	for(var i = 0; i < num; i++) {
		//get random color and push into arr
		arr.push(randomColor());
	}
	//return that array
	return arr;
}

function randomColor() {
	//pick a "red" from 0 - 255
	var r = Math.floor(Math.random() * 256);
	//pick a "green" from 0 - 255
	var g = Math.floor(Math.random() * 256);
	//pick a "blue" from 0 - 255
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}

