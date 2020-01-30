export default class MovingObj {
  constructor(pos, width, height) {
    this.pos = pos;

    this.x = pos[0];
    this.y = pos[1];
    this.width = width;
    this.height = height;

    this.xVel = 0;
    this.yVel = 0;
  }

  collide(salmon) {
    const _overlap = (rect1, rect2) => {
      //check that they don't overlap in the x axis
      if (rect1.bounds().left > rect2.bounds().right || rect1.bounds().right < rect2.bounds().left) {
        return false;
      }
      //check that they don't overlap in the y axis
      if (rect1.bounds().top > rect2.bounds().bottom || rect1.bounds().bottom < rect2.bounds().top) {
        return false;
      }
      return true;
    };

    let touch = false;
    // if (salmon.y === Nan)
    if (_overlap(this, salmon)) {
      touch = true;
    }
    return touch
  }

  draw(ctx) {
    if (!this.eaten) {
      ctx.drawImage(this.img, 0, 0, this.img.width, this.img.height, this.x, this.y, this.width, this.height)
    }
  }

  update() {
    this.x += this.xVel
    // this.y += this.yVel
    // const frameSpeed = 10;
    // const endFrame = 3

    // if (this.counter === (frameSpeed - 1)) {
    //   this.currentFrame = (this.currentFrame + 1) % endFrame;
    // }
    // this.counter = (this.counter + 1) % frameSpeed;
  }

  animate(ctx) {
    this.update();
    this.draw(ctx);
  }

  bounds() {
    return {
      left: this.x,
      right: this.x + this.width,
      top: this.y,
      bottom: this.y + this.height,
    };
  }
}