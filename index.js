let inc = 0.1;
let scl = 20;
let cols, rows;

zoff = 0;
let particles2 = []
let particles = [];
let flowfield = [];

function setup() {
    createCanvas(400, 400);
    background (0);
    cols = floor(width / scl);
    rows = floor(height / scl);

    flowfield = new Array(cols * rows);

    for (let i = 0; i < 250; i++) {
    particles [i] = new Particle();
    }
    for (let i = 0; i < 250; i++) {
        particles2 [i] = new Particle2();
        }
}

function draw() {
    // background(255);
    let yoff = 0;


    for (let x = 0; x < cols; x++) {
        let xoff = 0;
        for (let y = 0; y < rows; y++) {
            let indx = (x + y * cols);
            let angle = noise(xoff, yoff, zoff) * TWO_PI;
            let v = p5.Vector.fromAngle(angle);
            v.setMag(10);
            flowfield[indx] = v;
            xoff += inc;
            stroke(1, 100);
            strokeWeight(1);
            push();

            translate(x * scl, y * scl);
            rotate(v.heading());
            // line(0, 0, scl, 0);
            pop();
            // rect(x *scl, y * scl, scl, scl);
    }
        yoff += inc;
        zoff += .0001;
    }

    for (let i = 0; i < particles.length; i++) {
    particles[i].follow(flowfield);
    particles[i].update();
    particles[i].show();
    particles[i].edges ();
    }

    for (let i = 0; i < particles2.length; i++) {
        particles2[i].follow(flowfield);
        particles2[i].update();
        particles2[i].show();
        particles2[i].edges ();
        }
}   


