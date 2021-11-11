const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const game = new Game(canvas)

game.start()

const player = new Player(ctx);


setInterval(() => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    player.draw();
    player.move();
    
}, 1000 / 60);

