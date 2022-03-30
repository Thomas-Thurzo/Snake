
// Variablen 
let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
let rows = 20;
let cols = 20;
let snake = [ {x:19, y:3} ]
let food;
let cellWidth = canvas.width / cols;
let cellHeight = canvas.height / rows;
let direction = "LEFT";

placeFood();

setInterval(gameLoop, 500);
document.addEventListener("keydown", keyMove);

draw();


// Funktionen
function draw(){
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "white";
   
    snake.forEach(part => add(part.x, part.y));

    ctx.fillStyle = "yellow";
    add(food.x, food.y); 

    requestAnimationFrame(draw);
}

function add(x, y){
    ctx.fillRect(x * cellWidth, y * cellHeight, cellWidth - 1, cellHeight -1);
}

function gameLoop(){
    if(direction == "LEFT"){
        snake[0].x--;
    }

    if(direction == "RIGHT"){
        snake[0].x++;
    }

    if(direction == "UP"){
        snake[0].y--;
    }

    if(direction == "DOWN"){
        snake[0].y++;
    }

    if(snake[0].x == food.x && snake[0].y == food.y){
        // Futter einsammeln

        placeFood();
    }
    
}

function keyMove(e) {
    if(e.keyCode == 37){
        direction = "LEFT";
    }

    if(e.keyCode == 38){
        direction = "UP";
    }

    if(e.keyCode == 39){
        direction = "RIGHT";
    }

    if(e.keyCode == 40){
        direction = "DOWN";
    }
}

function placeFood() {
    let randomX = Math.floor(Math.random() * cols);
    let randomY = Math.floor(Math.random() * rows);

    food = {x: randomX, y: randomY};

}

