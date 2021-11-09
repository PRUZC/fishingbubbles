class Player {
    constructor(ctx) {
        this.ctx= ctx;
        ctx.beginPath(ctx);
ctx.arc(100, 75, 50, 0, 2 * Math.PI);
ctx.stroke();
        this.x=  100;
        this.y = 100;
        this.w = 25;
        this.h = 25;
    }

    draw() {
        this.ctx.fillRect(this.x, this.y, this.w, this.h);
        

    }
}