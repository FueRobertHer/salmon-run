import Air from './air';
import Water from './water';
import Ground from './ground';
// import MovingObj from './moving_obj';
import ZooPlankton from './zoo_plankton';
import Krill from './krill';

export default class Level {
  constructor(dimensions) {
    this.width = dimensions.width;
    this.height = dimensions.height

    this.buildLevel();
    this.generateFood(100);
  }

  buildLevel() {
    //loop through air, water, ground arrays and build them
    this.air = new Air ([0,0], this.width, this.height);
    this.water = new Water([0,200], this.width, this.height - 200, 'rect');
    
    this.rawGrounds = [
      {pos: [0, this.height - 50], width: this.width, height: (this.height - 350)},
      // {pos: [700, 140], width: 50, height: (this.height - 350 - 150)}
    ]
    this.grounds = []
    this.rawGrounds.forEach( option => {
      const ground = new Ground(option.pos, option.width, option.height);
      this.grounds.push(ground);
      // debugger
    })
    // this.ground = new Ground([0, 350], this.width, this.height - 350 - 150);
  }

  generateFood(num) {
    this.food = []
    for (let i = 0; i < num; i++) {
      // const foodItem = new ZooPlankton(this.water.randomPos(), 5, 5);
      // this.food.push(foodItem)
      const krill = new Krill(this.water.randomPos(), 15, 15);
      this.food.push(krill)

    }
    // this.zooP = new ZooPlankton(this.water.randomPos(), 5, 5);
    this.krill = new Krill(this.water.randomPos(), 15, 15);
  }

  atSurface(salmon) {
    //loop through water arrays and check if salmon
    return this.water.top <= salmon.bounds().bottom;
  }

  inLevel(salmon) {
    if (salmon.bounds().left < 0) {
      salmon.x = 0
    } else if (salmon.bounds().right > this.width) {
      salmon.x = this.width - salmon.height
    }
  }

  animate(ctx, salmon) {
    // loop through air, water, ground arrays and apply their effects to salmon
    this.air.applyAir(salmon);
    this.water.applyCurrent(salmon);

    this.grounds.forEach( ground => {ground.stopSalmon(salmon)});
    // this.ground.stopSalmon(salmon);

    this.food.forEach( prey => {prey.getEaten(salmon)})
    // this.zooP.getEaten(salmon);
    this.krill.getEaten(salmon);

    // loop through air, water, ground arrays and draw them
    this.air.animate(ctx);
    this.water.animate(ctx);
    // this.ground.animate(ctx);
    this.grounds.forEach( ground => ground.animate(ctx));

    this.food.forEach(prey => {
      this.water.applyCurrent(prey)
      prey.animate(ctx)
    })
    // this.zooP.animate(ctx);
    this.krill.animate(ctx);
  }
}