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
    this.food = []
    this.enemies = []

    this.buildLevel();
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
    
    let lastFood = this.food.length - 1
    if (this.food.length < num) {
      let spacing
      this.food[lastFood] ? spacing = this.food[lastFood].x + 50 : spacing = this.width/5
      spacing > this.width ? spacing = this.width : ''
      const krill = new Krill([spacing, this.water.randomYPos()], 15, 15);
      this.food.push(krill)
      console.log(this.food.length, krill.x)
    }
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


    // loop through air, water, ground arrays and draw them
    this.air.animate(ctx);
    this.water.animate(ctx);
    // this.ground.animate(ctx);
    this.grounds.forEach( ground => ground.animate(ctx));

    this.generateFood(20)

    this.food.forEach((prey, i) => {
      prey.getEaten(salmon)
      if (prey.eaten || prey.x < 0 || prey.x > this.width) this.food.splice(i, 1)
      this.water.applyCurrent(prey)
      prey.moveRandomly()
      prey.animate(ctx)
    })
  }
}