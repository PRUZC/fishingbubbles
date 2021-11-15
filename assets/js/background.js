class Background {
    
    constructor(ctx) {
        this.ctx = ctx;
        this.bgX = 0;
        this.bgY = 0;
        this.vx = 2;
        this.bgWidth = this.ctx.canvas.width;
        this.bgHeight = this.ctx.canvas.height;

        this.bgImg = new Image();
        this.bgImg.src = 'assets/img/background_fix.png';
        
        this.movementImg = new Image();
        this.movementImg.src = 'assets/img/background_superficie.png';
        
    }

    draw() {
        
        this.ctx.drawImage(this.movementImg, this.bgX , 0, this.bgWidth, this.bgHeight);
        this.ctx.drawImage(this.movementImg, this.bgX + this.bgWidth, this.bgY, this.bgWidth, this.bgHeight);
        this.ctx.drawImage(this.bgImg, 0, 0, this.bgWidth, this.bgHeight);
        
    }

    move() {
        this.bgX -= this.vx;
        if (this.bgX + this.bgWidth <= 0) {
         this.bgX = 0;   
        }
    }
}

