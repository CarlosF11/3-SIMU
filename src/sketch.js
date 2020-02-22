// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// Demonstration of the basics of motion with vector.
// A "mover" object stores position, velocity, and acceleration as vectors
// The motion is controlled by affecting the acceleration (in this case towards the mouse)

//let snake = [];
nworms = 0; //número de cucs que s'ha menjat la serp

function setup() {
    //Creem el canvas decidint la mida
    createCanvas(600,600);

    //Creem la serp
    snake = new Mover();

    //Creem el cuc que s'anirà actualitzant de posició
    //cada cop que se'l mengi la serp
    worm = new Worm();

    //imatge de fons
    bg = loadImage("background.jpg");

    //variables que ens seran útils per fer el compte enrera
    begin = millis();
    time = 60;
    duration = 60;
}

function draw() {
    //Dibuixem la imatge de fons
    background(bg);

    //Distància entre la serp i el cuc
    distance = createVector(snake.position.x,snake.position.y);
    distance = distance.sub(worm.position);

    //Funcions del cuc
    if(abs(distance.x) > 5) {
        worm.display();
    } else {
        nworms++;
        worm.update();
    }

    /*
    for (let i = 0; i < snake.length; i++) {
        snake[i].update();
        snake[i].display();
    }
    */
    //Funció de la serp
    snake.display();

    //Informació del menjar i el temps restant
    if (time > 0){
        //Funció de la serp
        snake.update();

        fill(0);
        textSize(24);
        text("Food:", 10, 30);
        text(nworms, 90, 30);
        text("Time:", 10, 60);
        time = duration - (int)((millis() - begin)/1000);
        text(time, 90, 60);
    } else {
        //Missatge que apareixerà quan el temps s'acabi
        fill(0, 143, 57);
        rect(150, 200, 300, 130, 10);
        textSize(24);
        fill(0);
        text("You have eaten "+nworms+" worms", 160, 300);
        textSize(46);
        text("Time is out!!",170,250);
    }
}