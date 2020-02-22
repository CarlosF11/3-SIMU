// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// Demonstration of the basics of motion with vector.
// A "Mover" object stores position, velocity, and acceleration as vectors
// The motion is controlled by affecting the acceleration (in this case towards the mouse)

let snake = [];

function setup() {
    createCanvas(600,600);
    for (var i = 0; i < 20; i++) {
        snake[i] = new Mover();
    }
    bg = loadImage("background.jpg");
}

function draw() {
    background(bg);
    for (let i = 0; i < snake.length; i++) {
        snake[i].update();
        snake[i].display();
    }
}