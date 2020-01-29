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
    this.eaten = false;

    this.img = new Image();
    // this.img.src = "./assets/images/zoo-plankton.png";
  }

  moveRandomly() {
    this.x += Math.floor(Math.random() * 5)
    this.x -= Math.floor(Math.random() * 4)
    this.y += Math.floor(Math.random() * 3)
    this.y -= Math.floor(Math.random() * 2)
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