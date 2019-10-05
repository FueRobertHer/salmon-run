import Element from './element';

export default class Ground extends Element {
  constructor(pos, width, height) {
    super(pos, width, height)

    this.pos = pos;
    this.width = width;
    this.height = height;

    this.left = this.pos[0];
    this.top = this.pos[1];
    this.right = this.left + this.width;
    this.bottom = this.top + this.height;
  }

  stopSalmon(salmon) {
    if (this.salmonIsIn(salmon)) {
      // debugger
      // salmon.yVel = 0;
      if (salmon.yVel > 0) {
        salmon.y = this.top - salmon.height;

      }
    }
  }

  drawGround(ctx) {
    ctx.fillStyle = "gray";
    ctx.fillRect(this.left, this.top, this.right, this.bottom);
  }

  animate(ctx) {
    this.drawGround(ctx);
  }

}