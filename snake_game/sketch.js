var canvasDimX = 600;
var canvasDimY = 600;
var s;
var scl = 10;
var food;

function setup() {
    createCanvas(canvasDimX, canvasDimY);
    s = new snake();
    frameRate(5);
    var col = floor(width / scl);
    var row = floor(height / scl);
    food = createVector(floor(random(col)), floor(random(row)));
    food.mult(scl);
}

function draw() {
    background(51);
    s.update();
    s.show();

    fill(255, 0, 100);
    rect(food.x, food.y, scl, scl);
}

function keyPressed() {
    if (keyCode === UP_ARROW) {
        s.dir(0, -1);
    }
    else if (keyCode === DOWN_ARROW) {
        s.dir(0, 1);
    }
    else if (keyCode === LEFT_ARROW) {
        s.dir(-1, 0);
    }
    else if (keyCode === RIGHT_ARROW) {
        s.dir(1, 0);
    }
}
