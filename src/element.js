export default class Element {
  constructor(pos, width, height) {
    this.pos = pos;
    this.width = width;
    this.height = height;

    this.left = this.pos[0];
    this.top = this.pos[1];
    this.right = this.left + this.width;
    this.bottom = this.top + this.height;
  }
  
  salmonIsIn(salmon) {
    const _overlap = (rect1, rect2) => {
      //check that they don't overlap in the x axis
      if (rect1.left > rect2.bounds().right || rect1.right < rect2.bounds().left) {
        return false;
      }
      //check that they don't overlap in the y axis
      if (rect1.top > rect2.bounds().bottom || rect1.bottom < rect2.bounds().top) {
        // debugger
        return false;
      }
      return true;
    };

    let isIn = false;
    if (_overlap(this, salmon)) { 
      // debugger
      isIn = true; }
    return isIn
  }

  bounds() {
    return ({
      left: this.pos[0],
      top: this.pos[1],
      right: (this.left + this.width),
      bottom: (this.top + this.height),
    })
  }

  // collidesWith(bird) {
  //   //this function returns true if the the rectangles overlap
  //   const _overlap = (rect1, rect2) => {
  //     //check that they don't overlap in the x axis
  //     if (rect1.left > rect2.right || rect1.right < rect2.left) {
  //       return false;
  //     }
  //     //check that they don't overlap in the y axis
  //     if (rect1.top > rect2.bottom || rect1.bottom < rect2.top) {
  //       return false;
  //     }
  //     return true;
  //   };
  //   let collision = false;
  //   this.eachPipe((pipe) => {
  //     if (
  //       //check if the bird is overlapping (colliding) with either pipe
  //       _overlap(pipe.topPipe, bird) ||
  //       _overlap(pipe.bottomPipe, bird)
  //     ) {
  //       collision = true;
  //     }
  //   });
  //   return collision;
  // }
}