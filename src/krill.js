import Prey from "./prey";

export default class Krill extends Prey {
  constructor(pos, width, height) {
    super(pos, width, height);

    this.pos = pos;
    this.x = pos[0];
    this.y = pos[1];
    this.width = width;
    this.height = height;

    this.foodValue = 4;
    this.eaten = false

    this.img = new Image();
    this.img.src = "./assets/images/krill.png";
  }
}