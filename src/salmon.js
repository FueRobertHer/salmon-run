const CONSTANTS = {
  GRAVITY: 1,
  TERMINAL_VEL: 25,
};

export default class Salmon {
  constructor(width) {
    this.x = 150;
    this.y = 350;

    this.initialWidth = width;

    this.width = this.initialWidth;
    this.height = this.width * .56;
    this.yVel = 0;
    this.xVel = 0;
    // this.jumpSpeed = this.height *;

    this.alive = true;
    this.faceLeft = true;
    this.totalEaten = 0;

    this.currentFrame = 0;
    this.counter = 0;
  }

  // jump() { this.yVel = -1 * this.jumpSpeed; }

  moveLeft() { this.xVel += -1 * this.height/9; this.faceLeft = true}
  moveRight() { this.xVel += this.height/9; this.faceLeft = false}
  moveUp() { this.yVel += -1 * this.height/5; }
  moveDown() { this.yVel += this.height/7; }

  moveSalmon() {
    this.x += this.xVel;
    this.y += this.yVel;
    this.yVel += CONSTANTS.GRAVITY;

    if (this.yVel > CONSTANTS.TERMINAL_VEL) {
      this.yVel = CONSTANTS.TERMINAL_VEL;
    }
    
  }

  grow() {
    this.width = this.initialWidth + Math.floor(Math.sqrt(this.totalEaten))
  }

  drawSalmon(ctx) {
    this.height = this.width * .56;
    // ctx.save();
    const salmonImg = new Image();
    const framesWidth = 25;
    const framesHeight = 14;
    
    salmonImg.src = "./assets/images/salmon.png";
    if (this.faceLeft) {
      ctx.drawImage(salmonImg, 0, this.currentFrame * framesHeight, framesWidth, framesHeight, this.x, this.y, this.width, this.height)
    } else {
      ctx.drawImage(salmonImg, 26, this.currentFrame * framesHeight, framesWidth, framesHeight, this.x - this.width + this.height, this.y, this.width, this.height)
    }
    // ctx.restore();
  }

  update() {
    const frameSpeed = 10;
    const endFrame = 3

    if (this.counter === (frameSpeed - 1)) {
      this.currentFrame = (this.currentFrame + 1) % endFrame;
    }
    this.counter = (this.counter + 1) % frameSpeed;
  }

  animate(ctx) {
    this.update();
    this.moveSalmon();
    this.drawSalmon(ctx);
  }

  bounds() {
    return {
      left: this.x,
      right: this.x + this.height,
      top: this.y,
      bottom: this.y + this.height,
    };
  }
}