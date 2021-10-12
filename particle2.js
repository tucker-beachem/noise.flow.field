function Particle2() {
    this.pos = createVector(random(width), random(height));
    this.vel = createVector(0,0);
    this.acc = createVector(0,0);
    this.maxspeed = 4;

    this.update = function() {
        this.vel.add(this.acc);
        this.vel.limit(this.maxspeed);
        this.pos.add(this.vel);
        this.acc.mult(0);
    }

    this.follow = function(vectors) {
        let x = floor(this.pos.y / scl);
        let y = floor(this.pos.x / scl);
        let index = x + y * cols;
        let force = vectors[index];
        this.applyForce(force);
    }

    this.applyForce = function(force) {
        this.acc.add(force);
    }

    this.show = function() {

        if (this.pos.y > width/2 && this.pos.x < width/2 || this.pos.y < width/2 && this.pos.x > width/2) {
            r = 50;
            g = 250;
            b = 225;
        } else {
            r = 50;
            g = 250;
            b = 225;
        }

 
        stroke(r, g, b, 2);
        strokeWeight(4);
        point(this.pos.x, this.pos.y);

}

    this.edges = function() {
        if (this.pos.x > width) this.pos.x = 0;
        if (this.pos.x < 0) this.pos.x = width;
        if (this.pos.y > height) this.pos.y = 0;
        if (this.pos.y < 0) this.pos.y = height;

    }
}