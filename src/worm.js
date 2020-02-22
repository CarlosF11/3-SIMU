class Worm {
    constructor() {
        this.position = createVector(random(20,width-20), random(20,height-20));
    }

    update() {
        this.position = createVector(random(20,width-20), random(20,height-20));
    }

    display() {
        //Creem el cuc en una posició aleatòria amb la imatge
        //this.imgworm = loadImage("worm.png");
        //image(this.imgworm, this.position.x, this.position.y, width/16, height/16);
        stroke(0);
        strokeWeight(2);
        fill(255, 0, 128);
        ellipse(this.position.x + 5, this.position.y + 5, 16, 16);
        ellipse(this.position.x, this.position.y, 16, 16);
        ellipse(this.position.x - 2, this.position.y - 10, 16, 16);
        ellipse(this.position.x - 10, this.position.y - 15, 16, 16);
        noSmooth();
        point(this.position.x - 7, this.position.y -17);
        point(this.position.x - 13, this.position.y -17);
    }

}