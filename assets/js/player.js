class Player {
    constructor(ctx) {
        this.ctx= ctx;
        ctx.beginPath(ctx);
    ctx.arc(150, 75, 10, 0, 2 * Math.PI);
    ctx.stroke();
        this.x=  150;
        this.y = 75;
        this.w = 10;
        this.h = 0;
        this.vx = 1;
        this.vy = 2;
    }

    draw() {
        this.ctx.fillRect(this.x, this.y, this.w, this.h);
       
    }

    move() {
        this.x += this.vx;
        if (this.x + this.w >= this.ctx.canvas.width) {
            this.vx = -this.vx;
        }

        if (this.x <= 0) {
            this.vx  -this.vx;
        }

        if (this.y + this.h >= this.ctx.canvas.height) {
            this.vy = -this.vy;
        }
    }
}