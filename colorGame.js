var mode = 6;
var colors = generate(mode);
var squares = document.querySelectorAll(".square");
var pickedColor = colorPicked();
var display = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var reset = document.querySelector("#reset");
var easy = document.querySelector("#easy");
var hard = document.querySelector("#hard");
display.textContent = pickedColor;


reset.addEventListener("click", function(){
    //gnerate new colors
    colors = generate(mode);
    // pick a random color from array
    pickedColor = colorPicked();
    // change the value of rgb at the display
    display.textContent = pickedColor; 
    messageDisplay.textContent = "";
    // change colors of square
    for(var i=0;i<squares.length;i++){
        squares[i].style.backgroundColor = colors[i];
    }
    h1.style.background = "firebrick";
    reset.textContent = "New Colors";

});

for(var i=0;i<squares.length;i++){
    //adding colors to the squares
    squares[i].style.backgroundColor = colors[i];


squares[i].addEventListener("click", function(){
    var clickedColor = this.style.backgroundColor;

    if(clickedColor === pickedColor) {

        display.textContent = pickedColor; 
        messageDisplay.textContent = "right choice";
        colorChange(clickedColor);
        h1.style.background = clickedColor;
        reset
        reset.textContent = "Try Again???"
        
    }
    else {
        
        display.textContent = pickedColor;
        this.style.background = "#000000";
        messageDisplay.textContent = "wrong choice";
    }
});
}

function colorChange(color){
    for (var i = 0 ; i<squares.length;i++){
        squares[i].style.background = color;    }
}


function colorPicked(){
   var random = Math.floor(Math.random() * colors.length);
   return colors[random];
}

function generate(num){
    // creating an array 
    var arr = []

    //reapeating and pushng in array
    for( var i =0 ; i < num; i++){
        arr.push(randomC());
    }
    return arr;


}

function randomC(){
    // pick a red from 0 - 255
    var r = Math.floor(Math.random() * 256)
    // pick a green from 0 -255
    var g = Math.floor(Math.random() * 256) 
    // pick a blue from 0 -255
    var b = Math.floor(Math.random() * 256) 

    return "rgb(" + r + ", " + g + ", " + b + ")"; 

}

easy.addEventListener("click", function(){
    easy.classList.add("selected");
    hard.classList.remove("selected");
    mode = 3;
    colors = generate(mode);
    pickedColor = colorPicked();
    display.textContent = pickedColor;
    for (var i=0;i<squares.length;i++){
        if(colors[i]){
            squares[i].style.background = colors[i];
        }else{
            squares[i].style.display = "none";
        }
    }
});

hard.addEventListener("click", function(){
    
    hard.classList.add("selected");
    easy.classList.remove("selected");
    mode = 6;  
    colors = generate(mode);
    pickedColor = colorPicked();
    display.textContent = pickedColor;
    for(var i=0;i<squares.length;i++){
        squares[i].style.background = colors[i];
        squares[i].style.display = "block";
    }
});

