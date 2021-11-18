class Player {
    constructor(ctx) {
        this.ctx= ctx;
        this.x=  150;
        this.y = 75;
        this.w = 100;
        this.h = 50;
        this.vx = 0;
        this.vy = 0;
        this.ay = 0.2;

        this.playerImg = new Image();
        this.playerImg.src = 'assets/img/fish_swim_left.png';

        this.playerImg.horizontalFrameIndex = 0;
        this.playerImg.verticalFrameIndex = 0;
        this.playerImg.horizontalFrames = 4;
        this.playerImg.verticalFrames = 1;
        this.playerImg.onload = () => {
            this.playerImg.isReady = true;
            this.playerImg.frameWidth = Math.floor (this.playerImg.width / this.playerImg.horizontalFrames);
            this.playerImg.frameHeight = Math.floor (this.playerImg.height / this.playerImg.verticalFrames);
            this.width = this.playerImg.frameWidth;
            this.height = this.playerImg.frameHeight;
        }

        this.drawCount = 0;
    }

    draw() {
        if (this.playerImg.isReady) {
            this.ctx.drawImage(
              this.playerImg,
              this.playerImg.horizontalFrameIndex * this.playerImg.frameWidth,
              this.playerImg.verticalFrameIndex * this.playerImg.frameHeight,
              this.playerImg.frameWidth,
              this.playerImg.frameHeight,
              this.x,
              this.y,
              this.w,
              this.h
            );
      
            this.drawCount++;
            this.animate();
          }   
       
    }

    animate() {
        this.animateFrame(0, 0, 4, 4);
      }
    
      animateFrame(initVerticalFrame, initHorizontalFrame, segments, frequency) {
        if (this.playerImg.verticalFrameIndex !== initVerticalFrame) {
          this.playerImg.verticalFrameIndex = initVerticalFrame;
          this.playerImg.horizontalFrameIndex = initHorizontalFrame;
        } else if (this.drawCount % frequency === 0) {
          this.playerImg.horizontalFrameIndex = (this.playerImg.horizontalFrameIndex + 1) % segments;
          this.drawCount = 0;
        }
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