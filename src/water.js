import Element from './element';

export default class Water extends Element {
  constructor(pos, width, height) {
    super(pos, width, height)

    this.pos = pos;
    this.width = width;
    this.height = height;

    this.left = this.pos[0];
    this.top = this.pos[1];
    this.right = this.left + this.width;
    this.bottom = this.top + this.height;
    
    this.friction = 0.8;
    this.current = .1;
    this.buoyancy = -0.75;
  }

  randomPos() {
    const randomX = Math.floor(Math.random() * this.width) + this.left;
    const randomY = Math.floor(Math.random() * this.height) + this.top;

    return [randomX, randomY];
  }

  applyCurrent(salmon) {
    if (this.salmonIsIn(salmon)) {
      salmon.xVel *= this.friction;
      salmon.yVel *= this.friction;
      salmon.xVel += this.current;
      salmon.yVel += this.buoyancy;
    }
  }

  drawWater(ctx) {
    ctx.fillStyle = "rgba(150, 205, 255, 0.5)";
    ctx.fillRect(this.pos[0], this.pos[1], this.width, this.height);
  }

  

  animate(ctx) {
    this.drawWater(ctx);
  }

}