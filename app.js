var colors = [
    "rgb(160, 190, 239)",
    "rgb(121, 142, 175)",
    "rgb(49, 56, 66)",
    "rgb(0, 127, 255)",
    "rgb(19, 60, 102)",
    "rgb(121, 219, 116)"
]
var squares = document.querySelectorAll(".square");
var colorPicked = colorPicked();
var ColorDisplay = document.getElementById("ColorDisplay");
var tick = document.getElementById("Tick");
var line = document.getElementsByClassName("TheLine");

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


function colorPicked(){
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
};
