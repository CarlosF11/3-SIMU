// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// Demonstration of the basics of motion with vector.
// A "Mover" object stores position, velocity, and acceleration as vectors
// The motion is controlled by affecting the acceleration (in this case towards the mouse)

let snake = [];
nworms = 0; //número de cucs que s'ha menjat la serp

function setup() {
    createCanvas(600,600);
    for (var i = 0; i < 20; i++) {
        snake[i] = new Mover();
    }
    //imatges
    bg = loadImage("background.jpg");
    worm = loadImage("worm.png");

    //variables que ens seran útils per fer el compte enrera
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

    image(worm, 100, 100, width/16, height/16);

    //Informació del menjar i el temps restant
    if (time > 0){
        textSize(24);
        text("Food:", 10, 30);
        text("0", 90, 30);
        text("Time:", 10, 60);
        time = duration - (int)((millis() - begin)/1000);
        text(time, 90, 60);
    } else {
        //Missatge que apareixerà quan el temps s'acabi
        fill(0, 143, 57);
        rect(150, 200, 300, 130, 10);
        textSize(24);
        text("You have eaten "+nworms+" worms", 160, 300);
        textSize(46);
        text("Time is out!!",170,250);
    }
}