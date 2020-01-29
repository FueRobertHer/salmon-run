export default class Camera {
  constructor(x, y, width, height, mapWidth, mapHeight) {
    this.x = x || 0;
    this.y = y || 0;

    this.xDeadZone = 250;
    this.yDeadZone = 150;

    this.width = width;
    this.height = height;

    this.mapWidth = mapWidth;
    this.mapHeight = mapHeight;

    this.followed = null;
    this.paused = false
  }

  follow(salmon) {
    this.followed = salmon;
  }

  update() {
    if (this.followed != null) {
      if (this.followed.bounds().left < this.width/2) {
        this.x = 0;
      } else if (this.followed.bounds().left > (this.mapWidth - this.width/2)) {
        this.x = this.mapWidth - this.width;
      } else {
        this.x = this.followed.bounds().left - this.width/2;
      }
      
      if (this.followed.bounds().top < this.height/2) {
        this.y = 0;
      } else if (this.followed.bounds().top > (this.mapHeight - this.height/2)) {
        this.y = this.mapHeight - this.height;
      } else {
        this.y = this.followed.bounds().top - this.height/2;
      }
    
    }
  }

  draw(ctx, img) {
    ctx.drawImage(img, this.x, this.y, this.width, this.height, 0, 0, this.width, this.height);
    if (this.paused) {
      ctx.font = "30px Comic Sans MS";
      ctx.fillStyle = "white";
      ctx.textAlign = "center";
      ctx.fillText("PAUSED", canvas.width / 2, canvas.height / 2);
    }
  }

  animate(ctx, img) {
    ctx.clearRect(0, 0, this.width, this.height)
    this.update();
    this.draw(ctx, img)
  }
}