var canvasDimX = 400;
var canvasDimY = 400;
function setup() {
    createCanvas(canvasDimX, canvasDimY);
    background(255);  // for grayscale one can use just one argument
}

function draw() {
    // background(255);  // for grayscale one can use just one argument
    let a, b, theta, max_N, x0, y0;

    x0 = 200;
    y0 = 200;
    a = 10;
    b = 10;
    max_N = 20;
    theta = 2 * PI / max_N;

    // circles that follows the cursor
    stroke(0, 255, 0, 100);
    strokeWeight(5);
    for (let i = 0; i < max_N; i++) {
        point(mouseX + a * cos(i * theta), mouseY + b * sin(i * theta));
    }

    // circle that mirrors the cursor
    stroke(255, 45, 0, 10);
    strokeWeight(5);
    for (let i = 0; i < max_N; i++) {
        point(mouseY + a * cos(i * (theta + 0.01)), mouseX + b * sin(i * (theta + 0.01)));
    }
}
