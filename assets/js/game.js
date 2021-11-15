class Game {
    constructor(canvas) {
      this.ctx = canvas.getContext("2d");
      this.player = new Player(this.ctx);
      this.bubble = new Bubble();
      this.background = new Background(this.ctx);    
    }

    start() {
        setInterval(() => {
            ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
            this.background.draw();
            this.background.move();
            handleBubbles();
            
            this.player.draw();
            this.player.move();
            ctx.fillText('score: ' + score, 10, 50);
            gameFrame++;
        }, 1000 / 30);
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
