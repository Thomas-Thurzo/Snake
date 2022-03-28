
// Variablen 
let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
let rows = 10;
let cols = 10;
let snake;
let food;
let cellWidth = canvas.width / cols;
let cellHeight = canvas.height / rows;
let direction = "LEFT";


// Aufruf der Funktionen
draw();


// Funktionen
function draw(){
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "white";
    ctx.fillRect(100, 150, 30 -1 , 30 -1);
    ctx.fillRect(130, 150, 30 -1, 30 -1);
    ctx.fillRect(160, 150, 30 -1, 30 -1);
    ctx.fillRect(190, 150, 30 -1, 30 -1);

    ctx.fillStyle = "green";
    ctx.fillRect(290, 250, 30 -1, 30 -1);
}

function add(x, y){
    ctx.fillRect(x, y, 30 - 1, 30 -1);
}

function gameLoop(){

}

