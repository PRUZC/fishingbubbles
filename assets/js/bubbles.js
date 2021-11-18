class Bubble {
    constructor(ctx){
        this.ctx= ctx;
        this.x = Math.random() * canvas.width;
        this.y = canvas.height + 100;
        this.radius = 40;
        this.speed = Math.random() * 5 + 1;
        this.distance;
        this.hitted = false;

        this.BubbleImg = new Image();
        this.BubbleImg.src = 'assets/img/bubble_pop.png';

        this.BubbleImg.horizontalFrameIndex = 0;
        this.BubbleImg.verticalFrameIndex = 0;
        this.BubbleImg.horizontalFrames = 4;
        this.BubbleImg.verticalFrames = 2;
        this.BubbleImg.onload = () => {
            this.BubbleImg.isReady = true;
            this.BubbleImg.frameWidth = Math.floor(this.BubbleImg.width / this.BubbleImg.horizontalFrames);
            this.BubbleImg.frameHeight = Math.floor (this.BubbleImg.height / this.BubbleImg.verticalFrames);
            this.width = this.BubbleImg.frameWidth;
            this.height = this.BubbleImg.frameHeight;
        }
        this.drawCount = 0;
    }

    move() {
        this.y -= this.speed;
    }
    
    draw() {
        // ctx.fillStyle = 'blue';
        // ctx.beginPath();
        // ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        // ctx.fill();
        // ctx.closePath();
        // ctx.stroke();
        if (this.BubbleImg.isReady) {
            this.ctx.drawImage(
                this.BubbleImg,
                this.BubbleImg.horizontalFrameIndex * this.BubbleImg.frameWidth,
                this.BubbleImg.verticalFrameIndex * this.BubbleImg.frameHeight,
                this.BubbleImg.frameWidth,
                this.BubbleImg.frameHeight,
                this.x,
                this.y,
                this.radius,
                this.radius
            )
            
        }

        if (this.hitted) {
            this.animate()
        }
        this.drawCount++
}



  animate() {
    this.animateFrame(0, 0, 4, 5);
  }

  animateFrame(initVerticalFrame, initHorizontalFrame, segments, frequency) {
    if (this.BubbleImg.verticalFrameIndex !== initVerticalFrame) {
      this.BubbleImg.verticalFrameIndex = initVerticalFrame;
      this.BubbleImg.horizontalFrameIndex = initHorizontalFrame;
    } else if (this.drawCount % frequency === 0) {
      this.BubbleImg.horizontalFrameIndex = (this.BubbleImg.horizontalFrameIndex + 1) % segments;
      this.drawCount = 0;
    }
  }
}
