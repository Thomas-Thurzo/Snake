
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
let foodCollected = false;
let punkte = 0;


// Start Funktion
function startFunktion(){
    placeFood();

    interval = setInterval(gameLoop, 200);
    document.addEventListener("keydown", keyMove);

    draw();

    displayPunkte();
}

// Game Over Funktion
function gameOver(){
    document.getElementById("punkteAusgabe").innerHTML = "Game-Over / " + "Punkte: " + punkte;
    punkte = 0;
    snake = [ {x:19, y:3} ]
    direction = "LEFT";   
    clearInterval(interval); 
}

// Zeichnet das Spielfeld
function draw(){
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "white";
   
    snake.forEach(part => add(part.x, part.y));

    ctx.fillStyle = "yellow";
    add(food.x, food.y); 

    requestAnimationFrame(draw);
}

// Prüft auf Spielabbruch
function testGameOver(){
    
    let firstPart = snake[0];
    let otherParts = snake.slice(1);
    let dublicatePart = otherParts.find(part => part.x == firstPart.x && part.y == firstPart.y);

    if(snake[0].x <0 || snake[0].x > cols - 1 || snake[0].y < 0 || snake[0].y > rows - 1 || dublicatePart){
         gameOver();
    }
}

// Fügt Teile zur Schlange dazu
function add(x, y){
    ctx.fillRect(x * cellWidth, y * cellHeight, cellWidth - 1, cellHeight -1);
}

// Bewegung der Schlange
function shiftSnake(){
    for (let index = snake.length - 1; index > 0; index--) {
        const part = snake[index];
        const lastPart = snake[index - 1];
        part.x = lastPart.x;
        part.y = lastPart.y;
    }
}

// Bewegung der Schlange
function gameLoop(){

    testGameOver();

    if(foodCollected == true){
        snake = [ {x: snake[0].x, y: snake[0].y}, ...snake ];

        foodCollected = false;
    }

    shiftSnake();

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
        
        foodCollected = true;
        punkte ++;
        displayPunkte();
        placeFood();
    }
    
}

// Abfrage für die Steuerung
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

// Plaziert das Essen
function placeFood() {
    let randomX = Math.floor(Math.random() * cols);
    let randomY = Math.floor(Math.random() * rows);

    food = {x: randomX, y: randomY};

}

// Zeigt den Punktestand an
function displayPunkte(){
    document.getElementById("punkteAusgabe").innerHTML = "Punktestand: " + punkte;
}

