const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const game = new Game(canvas);
const player = new Player(ctx);
const bubblesArray = [];
const background = new Background(ctx);

game.start();


document.addEventListener("keydown", (event) => {
    game.onKeyDown(event.keyCode)
})

document.addEventListener('keyup', (event) => {
    game.onKeyUp(event.keyCode)
})

let score = 0;
let gameFrame = 0;
ctx.font = '20px Georgia';




