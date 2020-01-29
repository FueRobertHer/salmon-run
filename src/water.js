import Element from './element';

export default class Water extends Element {
  constructor(pos, width, height, shape) {
    super(pos, width, height)

    this.pos = [pos[0] + width/2, pos[1] + height/2];
    this.width = width;
    this.height = height;
    this.shape = shape;

    this.left = pos[0];
    this.top = pos[1];
    this.right = this.left + this.width;
    this.bottom = this.top + this.height;
    
    this.friction = 0.8;
    this.current = -1;
    this.buoyancy = -0.5;
  }

  randomPos() {
    return [this.randomPos(), this.randomYPos()];
  }

  randomXPos() {
    return Math.floor(Math.random() * this.width);
  }

  randomYPos() {
    return Math.floor(Math.random() * (this.height - 50) + this.top);
  }

  applyCurrent(obj) {
    if (this.salmonIsIn(obj)) {
      obj.xVel *= this.friction;
      obj.yVel *= this.friction;
      obj.xVel += this.current;
      obj.yVel += this.buoyancy;

      if (obj.y < this.top + 100) {
        obj.xVel += this.current;
        obj.yVel -= this.buoyancy;
      }
    }
  }

  inWater(salmon) {
    const _overlap = (rect1, rect2) => {
      const obj1Radius = rect1.width/2;
      const obj2Radius = rect2.height/2;
      const totalRadius = obj1Radius + obj2Radius;

      const a = rect2.x - rect1.pos[0];
      const b = rect2.y - rect1.pos[1];
      const c = Math.sqrt((a * a) + (b * b));
      //check that they don't overlap in the x axis

      if (c < totalRadius) return true;
      return false;
    };

    let isIn = false;
    if (_overlap(this, salmon)) isIn = true;
    return _overlap(this, salmon)
  }

  drawWater(ctx) {
    ctx.fillStyle = "rgba(150, 205, 255, 0.8)";
    if (this.shape === 'rect') {
      ctx.fillRect(this.left, this.top, this.width, this.height);
    // } else if (this.shape === 'circle') {
    //   ctx.beginPath();
    //   ctx.arc(this.pos[0], this.pos[1], this.width/6, 0, 360)
    //   ctx.fill();
    }
  }

  

  animate(ctx) {
    this.drawWater(ctx);
  }

}