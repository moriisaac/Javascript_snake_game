// Initialize canvas and set game variables
var canvas = document.getElementById("gameCanvas");
var ctx = canvas.getContext("2d");
var playerX = 50;
var playerY = 50;
var score = 0;
var obstacleX = 150;
var obstacleY = 150;
var obstacleW = 30;
var obstacleH = 30;

// Draw player and obstacle on canvas
function drawPlayer() {
    ctx.fillStyle = "blue";
    ctx.fillRect(playerX, playerY, 30, 30);
}

function drawObstacle() {
    ctx.fillStyle = "red";
    ctx.fillRect(obstacleX, obstacleY, obstacleW, obstacleH);
}

// Update player position based on keyboard input
document.onkeydown = function(event) {
    if(event.keyCode === 37) { // Left arrow key
        playerX -= 5;
    } else if(event.keyCode === 38) { // Up arrow key
        playerY -= 5;
    } else if(event.keyCode === 39) { // Right arrow key
        playerX += 5;
    } else if(event.keyCode === 40) { // Down arrow key
        playerY += 5;
    }
}

// Check for collision between player and obstacle
function checkCollision() {
    if(playerX < obstacleX + obstacleW &&
       playerX + 30 > obstacleX &&
       playerY < obstacleY + obstacleH &&
       playerY + 30 > obstacleY) {
        score += 1;
        obstacleX = Math.floor(Math.random() * (canvas.width - obstacleW));
        obstacleY = Math.floor(Math.random() * (canvas.height - obstacleH));
    }
}

// Main game loop
function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawPlayer();
    drawObstacle();
    checkCollision();
    ctx.font = "16px Arial";
    ctx.fillText("Score: " + score, 8, 20);
    requestAnimationFrame(gameLoop);
}

// Start game
requestAnimationFrame(gameLoop);
