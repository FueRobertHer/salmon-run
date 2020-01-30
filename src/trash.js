import Prey from "./prey";

export default class Trash extends Prey {
  constructor(pos, width, height) {
    super(pos, width, height);

    this.pos = pos;
    this.x = pos[0];
    this.y = pos[1];
    this.width = width;
    this.height = height;

    this.foodValue = -15;
    this.eaten = false

    this.img = new Image();
    this.img.src = "./assets/images/trash.png";
  }

  getEaten(salmon) {
    if (this.collide(salmon)) {
      if (!this.eaten) {
        salmon.totalEaten += this.foodValue;
        salmon.grow();
        this.eaten = true;
      }
    }
  }
}