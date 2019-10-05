import MovingObj from "./moving_obj";

export default class Predator extends MovingObj {
  constructor(pos, width, height) {
    super(pos, width, height);

    this.pos = pos;
    this.x = pos[0];
    this.y = pos[1];
    this.width = width;
    this.height = height;

    this.hit = false;
  }

  attack(salmon) {
    if (this.collide(salmon)) {
      if (!this.hit) {
        salmon.alive = false;
      }
    }
  }

}