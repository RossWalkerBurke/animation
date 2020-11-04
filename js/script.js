// get a handle to the canvas context
var canvas = document.getElementById("the_canvas");

// get 2D context for this canvas
var context = canvas.getContext("2d");

// Setup image
var image = new Image();
image.src = "./img/bg.png";

// Input to be added
function input() {
    console.log("Input ...");
}

// Update to be added
function update() {
    console.log("Update ...");
}

var x = 0,
    y = 1300;

function draw() {
    console.log("Draw  ...");

    if (x < (800 + (image.width / 2))) {
        x += 20;
    }

    // Draw image
    context.drawImage(image, x, y, 800, 800, 0, 0, 800, 800);
    animate();

}

// Total Frames
var frames = 6;

// Current Frame
var currentFrame = 0;

// Sprite
var sprite = new Image();
sprite.src = "./img/stick.png"; // Frames 1 to 6

// X axis to Draw from
var sprite_x = 0;

// Initial time set
var initial = new Date().getTime();
var current; // current time

function animate() {
    current = new Date().getTime(); // update current
    if (current - initial >= 500) { // check is greater that 500 ms
        currentFrame = (currentFrame + 1) % frames; // update frame
        initial = current; // reset initial
    } 

    // Draw sprite frame
    context.drawImage(sprite, (sprite.width / 6) * currentFrame, 0, 100, 150, 0, 0, 100, 150);

    context.font = '36pt Orbitron';
    context.fillText(currentFrame, 320, 100);
}

function gameloop() {
    input();
    update();
    draw();
    window.requestAnimationFrame(gameloop);
}

window.requestAnimationFrame(gameloop);