

var numSquares = 6;
var colors = GenerateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var colorPicked = pickColor();
var ColorDisplay = document.getElementById("ColorDisplay");
var tick = document.getElementById("Tick");
var line = document.getElementsByClassName("TheLine");
var h1 = document.querySelector("h1");
var resetButton = document.getElementById("reset");
var EasyBTN = document.getElementById("EasyBTN");
var HardBTN = document.querySelector("#HardBTN");

// This is for " EASY BUTTON !"
EasyBTN.addEventListener("click",function(){
  HardBTN.classList.remove("selected");
  EasyBTN.classList.add("selected");
  numSquares = 3;
  colors = GenerateRandomColors(numSquares);
  pickedColor = pickColor();
  ColorDisplay.textContent = pickedColor;
  for(var i=0; i < squares.length;i++){
    if(colors[i]){
      squares[i].style.backgroundColor = colors[i];
    }
    else{
      squares[i].style.display = "none";
    }
  }
});

// This is for "HARD BUTTON !"
HardBTN.addEventListener("click",function(){
  EasyBTN.classList.remove("selected");
  HardBTN.classList.add("selected");

  numSquares = 6;
  colors = GenerateRandomColors(numSquares);
  pickedColor = pickColor();
  ColorDisplay.textContent = pickedColor;
  for(var i=0; i < squares.length;i++){

      squares[i].style.backgroundColor = colors[i];
      squares[i].style.display = "block";
  }
});



resetButton.addEventListener("click", function(){
  // generate all new colors
  colors = GenerateRandomColors(numSquares);
  // pick a new color from array
  colorPicked = pickColor();
  // change colorDisplay to match color picked !
  ColorDisplay.textContent = pickColor();
  // change colors of squares
  for(var i = 0;i<squares.length;i++){
    squares[i].style.backgroundColor=colors[i];
  }
  h1.style.backgroundColor = "steelblue";
});

ColorDisplay.textContent=colorPicked;

for(var i = 0; i < squares.length;i++){

    squares[i].style.backgroundColor=colors[i];

    // add event listner to the square!
    squares[i].addEventListener("click",function(){
    //     grab color of clicked square " see the rgb color when you clicked!"
    var pickedColor = this.style.backgroundColor;
    //     alert(this.style.backgroundColor);
    //   compare the color in colorPicked!
        if(pickedColor === colorPicked){
            tick.textContent = "Correct!";
            this.style.backgroundColor = "dimgray";
            if(tick.textContent="Correct!"){
              tick.style.color = "green";
              ChangeColor(colorPicked);
              h1.style.backgroundColor = colorPicked;
              resetButton.textContent="Play Again?"
            }
        }
        else{
            console.log("Not!")
            tick.textContent= "Try Again!!";
          this.style.backgroundColor = "dimgray";
          if(tick.textContent="Try Again!!"){
            tick.style.color = "darkred";
          }
        }
    });
};


function ChangeColor(color) {
  // loop through all squares
  for (var i = 0; i < squares.length; i++) {
  // change the color to be like the correct one!
    squares[i].style.backgroundColor = color;
  }
}


function pickColor(){
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
};


function GenerateRandomColors(num){
  // make an array
  var arr = [];

  // add num random colors to array
  for(var i = 0;i < num;i++){
    // get random color in push into arr
    arr.push(randomColor());
  }
  // return the array [arr]
  return arr;
}

function randomColor() {
  //  pick a "red" from 0 - 255
  var red = Math.floor(Math.random() * 256);
  //  pick a "green" from 0- 255
  var green = Math.floor(Math.random() * 256);
  // pick a "blue" from 0 - 255
  var blue = Math.floor(Math.random() * 256);
  return "rgb(" + red + ", " + green + ", " + blue + ")";
}
