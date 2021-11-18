class Game {
    constructor(canvas) {
      this.ctx = canvas.getContext("2d");
      this.player = new Player(this.ctx);
      //this.bubble = new Bubbles(this.ctx);
      this.background = new Background(this.ctx);
      this.bubbleTick = 0;
      this.bubbles = [new Bubble(this.ctx)]
    }

    start() {
        setInterval(() => {
            ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
            this.draw();
            this.move();
            
            this.handleBubbles();
      
            ctx.fillText('score: ' + score, 10, 50);
            this.bubbleTick++;
        }, 1000 / 30);
    }

    handleBubbles(){
      if (this.bubbleTick % 50 == 0){
        this.bubbles.push(new Bubble(this.ctx));
      }

      for (let i = 0; i < this.bubbles.length; i++){
          if (this.bubbles[i].y < 0 - this.bubbles[i].radius * 2){
            this.bubbles.splice(i, 1);
          }
      }
    }

    draw() {
      this.background.draw();
      this.player.draw();
      for (let i = 0; i < this.bubbles.length; i++){
        this.bubbles[i].draw();
      }
    }

    move() {
      this.background.move();
      this.player.move();
      for (let i = 0; i < this.bubbles.length; i++){
        this.bubbles[i].move();
      }
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
