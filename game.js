const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Kart und Strecke
let kart = { x: 400, y: 500, width: 50, height: 30, speed: 5 };
let track = { y: 0, speed: 2 };

// Steuerung
let keys = {};

window.addEventListener('keydown', e => keys[e.key] = true);
window.addEventListener('keyup', e => keys[e.key] = false);

function update() {
    // Bewegung des Karts
    if (keys['ArrowLeft'] && kart.x > 0) kart.x -= kart.speed;
    if (keys['ArrowRight'] && kart.x < canvas.width - kart.width) kart.x += kart.speed;

    // Bewegung der Strecke
    track.y += track.speed;
    if (track.y > canvas.height) track.y = 0;
}

function draw() {
    // Hintergrund
    ctx.fillStyle = 'gray';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Strecke
    ctx.fillStyle = 'white';
    ctx.fillRect(canvas.width / 2 - 10, track.y, 20, canvas.height);
    ctx.fillRect(canvas.width / 2 - 10, track.y - canvas.height, 20, canvas.height);

    // Kart
    ctx.fillStyle = 'red';
    ctx.fillRect(kart.x, kart.y, kart.width, kart.height);
}

function gameLoop() {
    update();
    draw();
    requestAnimationFrame(gameLoop);
}

gameLoop();
