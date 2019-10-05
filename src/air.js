import Element from './element';

export default class Air extends Element {
  constructor(pos, width, height) {
    super(pos, width, height)

    this.pos = pos;
    this.width = width;
    this.height = height;

    this.left = this.pos[0];
    this.top = this.pos[1];
    this.right = this.left + this.width;
    this.bottom = this.top + this.height;

    this.gravity = 0.1;
  }

  applyAir(salmon) {
    if (this.salmonIsIn(salmon)) {
      salmon.yVel += this.gravity;
    }
  }

  drawAir(ctx) {
    ctx.fillStyle = "rgba(100, 100, 100, 0.1)";
    ctx.fillRect(this.pos[0], this.pos[1], this.width, this.height);
  }



  animate(ctx) {
    this.drawAir(ctx);
  }

}