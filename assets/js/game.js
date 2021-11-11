class Game {
    constructor(canvas) {
      this.ctx = canvas.getContext("2d");
      this.player = new Player(this.ctx);
    }

    start() {
        setInterval(() => {
            ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
            this.player.draw();
            this.player.move();
        }, 1000 / 60);
    }

    onKeyDown(code) {
        this.player.onKeyDown(code);
      }
    
    onKeyUp(code) {
        this.player.onKeyUp(code);
      }

    onKeyRight(code) {
        this.player.onKeyRight(code);
      }
    
    onKeyLeft(code) {
        this.player.onKeyLeft(code);
      }
}
