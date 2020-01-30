import Air from './air';
import Water from './water';
import Ground from './ground';
import Krill from './krill';
import Trash from './trash';

export default class Level {
  constructor(dimensions) {
    this.width = dimensions.width;
    this.height = dimensions.height
    this.food = []
    this.trash = []
    this.enemies = []

    this.buildLevel();
    setInterval(() => {
      console.log(this.food, this.trash)
    }, 1000);
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
      this.food[lastFood] ? spacing = this.food[lastFood].x + 150 : spacing = this.width
      
      if (spacing <= this.width) {
        const krill = new Krill([spacing, this.water.randomYPos()], 15, 15);
        this.food.push(krill)
      }
    }
  }

  generateTrash(num) {
    let lastTrash = this.trash.length - 1
    if (this.trash.length < num) {
      let spacing
      this.trash[lastTrash] ? spacing = this.trash[lastTrash].x + 250 : spacing = this.width

      if (spacing <= this.width) {
        const blah = new Trash([spacing, this.water.randomYPos()], 25, 25);
        this.trash.push(blah)
      }
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

  animateTrash(ctx, salmon) {
    this.generateTrash(4)

    this.trash.forEach((tra, i) => {
      tra.getEaten(salmon)
      if (tra.eaten || tra.x < 0 || tra.x > this.width || tra.y > this.height) this.trash.splice(i, 1)
      this.water.applyCurrent(tra)
      tra.moveRandomly(1)
      tra.animate(ctx)
    })  
  }

  animateFood(ctx, salmon) {
    this.generateFood(8)

    this.food.forEach((prey, i) => {
      prey.getEaten(salmon)
      if (prey.eaten || prey.x < 0 || prey.x > this.width || prey.y > this.height) this.food.splice(i, 1)
      this.water.applyCurrent(prey)
      prey.moveRandomly(5)
      prey.animate(ctx)
    })
  }

  animatePrey(ctx, salmon) {
    this.animateFood(ctx, salmon)
    this.animateTrash(ctx, salmon)
  }

  animateEnv(ctx, salmon) {
    // loop through air, water, ground arrays and apply their effects to salmon
    this.air.applyAir(salmon);
    this.water.applyCurrent(salmon);

    this.grounds.forEach(ground => {
      ground.stopSalmon(salmon)
    });
    // this.ground.stopSalmon(salmon);

    // loop through air, water, ground arrays and draw them
    this.air.animate(ctx);
    this.water.animate(ctx);
    // this.ground.animate(ctx);
    this.grounds.forEach(ground => ground.animate(ctx));
  }

  animate(ctx, salmon) {
    this.animateEnv(ctx, salmon)
    this.animatePrey(ctx, salmon)
  }
}