Math.floor(Math.random() * 500) + 1;

function clickMe(){
    console.log();
    alert();
}

function importantMassage(){
    for (var i = 0; i < 20; i++) {
        alert("We've been trying to reach you about your cars extended warenty!");
        console.log("Let's crahs this guys computer!");
    } 
}

var divs = document.getElementsByTagName('div'); // collects all divs
var winWidth = window.innerWidth;    // get window width 
var winHeight = window.innerHeight;  //  get window height

for ( var i=0; i < divs.length; i++ ) {  // i stands for "index". you could also call this banana or haircut. it's a variable
    var thisDiv = divs[i];     // shortcut! the current div in the list
    
    randomTop = getRandomNumber(0, winHeight);    // get random numbers for each element
    randomLeft = getRandomNumber(0, winWidth);    // get random numbers for each element
    
    thisDiv.style.top = randomTop +"px";   // update top position
    thisDiv.style.left = randomLeft +"px"; // update left position
}

function getRandomNumber(min, max) {  // function that returns a random number between a min and max
  return Math.random() * (max - min) + min;
}

