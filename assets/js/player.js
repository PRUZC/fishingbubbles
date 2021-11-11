class Player {
    constructor(ctx) {
        this.ctx= ctx;
        this.x=  150;
        this.y = 75;
        this.w = 10;
        this.h = 0;
        this.vx = 0;
        this.vy = 0;
        this.ay = 0.2;
    }

    draw() {
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.w, 0, 2 * Math.PI);
        this.ctx.stroke();
       
    }

    move() {
        this.vy += this.ay;

        this.x += this.vx;
        this.y += this.vy;

        if (this.x + this.w >= this.ctx.canvas.width) {
            this.vx = -this.vx;
        }

        if (this.x <= 0) {
            this.vx = -this.vx;
        }

        if (this.y + this.h >= this.ctx.canvas.height) {
            this.y = this.ctx.canvas.height - this.h;
            this.vy = -this.vy;
        }
    }

    onKeyDown(code) {
        console.log('code', code)
        if (code === KEY_RIGHT) {
            this.vx = 10;
        }

        if (code === KEY_LEFT) {
            this.vx = -10;
        }

        if (code === KEY_UP) {
            this.vy = -10;
        }
    }

    onKeyUp(code) {
        if (code === KEY_RIGHT || code === KEY_LEFT) {
            this.vx = 0;
        }
    }
}