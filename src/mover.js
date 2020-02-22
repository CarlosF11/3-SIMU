// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

class Mover{

    constructor() {
        this.position = new PVector(random(width),random(height));
        this.velocity = new PVector(1,1);
        this.acceleration = new PVector(0.01,0.01);
        this.topspeed = 5;
    }

    update() {
        // Compute a vector that points from position to mouse
        var mouse = createVector(mouseX,mouseY);
        this.acceleration = p5.Vector.sub(mouse,this.position);
        // Set magnitude of acceleration
        this.acceleration.setMag(0.2);

        this.velocity.add(this.acceleration);
        this.velocity.limit(this.topspeed);
        this.position.add(this.velocity);
    }

    display() {
        stroke(0);
        strokeWeight(2);
        fill(56);
        ellipse(this.position.x, this.position.y, 48, 48);
    }
}