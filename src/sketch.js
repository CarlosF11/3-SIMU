// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// Demonstration of the basics of motion with vector.
// A "Mover" object stores position, velocity, and acceleration as vectors
// The motion is controlled by affecting the acceleration (in this case towards the mouse)

let snake = [];
seconds=60;

function setup() {
    createCanvas(600,600);
    for (var i = 0; i < 20; i++) {
        snake[i] = new Mover();
    }
    bg = loadImage("background.jpg");
    begin = millis();
    time = 60;
    duration = 60;
}

function draw() {
    //Dibuixem la imatge de fons
    background(bg);
    for (let i = 0; i < snake.length; i++) {
        snake[i].update();
        snake[i].display();
    }
    //Informació del menjar i el temps restant
    textSize(24);
    text("Food:", 10, 30);
    text("0", 90, 30);
    text("Time:", 10, 60);

    if (time > 0){
        time = duration - (int)((millis() - begin)/1000);
        text(time, 90, 60);
    }
}