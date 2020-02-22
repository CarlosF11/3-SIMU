class PVector {

    constructor(x2, y2) {
        this.x = x2;
        this.y = y2;
    }

    add(v) {
        this.y = this.y + v.y;
        this.x = this.x + v.x;
    }

    mag() {
        return sqrt(this.x*this.x + this.y*this.y);
    }

    limit(max) {
        if (mag()*mag() > max*max) {
            normalize();
            mult(max);
        }
    }
}