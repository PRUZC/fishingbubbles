class Player {
    constructor(ctx) {
        this.ctx= ctx;
        this.x= 100;
        this.y = 100;
        this.w = 50;
        this.h = 75;
    
    }
    


draw() {
    this.player.fillRect(this.x, this.y, this.w, this.h);
}
}