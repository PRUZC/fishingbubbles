class Game {
    constructor(canvas) {
      this.ctx = canvas.getContext("2d");
      this.player = new Player(this.ctx);

    }

    start() {
        this.player.draw();
    }
}
