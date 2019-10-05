import MovingObj from "./moving_obj";

export default class Prey extends MovingObj {
  constructor(pos, width, height) {
    super(pos, width, height);

    this.pos = pos;
    this.x = pos[0];
    this.y = pos[1];
    this.width = width;
    this.height = height;
    
    this.foodValue = 0;
    this.eaten = false

    this.img = new Image();
    // this.img.src = "./assets/images/zoo-plankton.png";
  }

  getEaten(salmon) {
    if (this.collide(salmon)) {
      if (!this.eaten) {
        salmon.totalEaten += this.foodValue;
        salmon.width = salmon.initialWidth + salmon.totalEaten*5;
        this.eaten = true;
      }
    }
  }
}