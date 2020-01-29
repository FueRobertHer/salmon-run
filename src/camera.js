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
    this.score = 0
    this.salmonSize = 0
    this.gameover = false

    this.countdown = 2

    this.count = setInterval(() => {
      this.countdown--
    }, 1000);
    this.pause()
  }

  stopCount() {
    clearInterval(this.count)
  }

  startCountdown() {
    setInterval(() => {
      this.countdown--
    }, 1000);
  }

  follow(salmon) {
    this.followed = salmon;
  }

  unpause() {
    if (this.paused) {
      this.paused = false
      this.count = setInterval(() => {
        this.countdown--
      }, 1000);
    }
  }

  pause() {
    this.paused = true
    this.stopCount()
  }

  timeUp() {
    if (this.countdown === 0) this.stopCount()
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

    this.timeUp()
  }

  takeScore(score, size) {
    this.score = score
    this.salmonSize = size
    this.gameover = true
  }

  showScore(ctx) {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, this.width, this.height)

    ctx.font = "50px Baloo";
    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    let text = "You Ate: " + this.score
    ctx.fillText(text, this.width / 2, this.height / 3);
    text = "Your Size: " + this.salmonSize
    ctx.fillText(text, this.width / 2, (this.height / 3)*2);

  }

  draw(ctx, img) {
    if (this.gameover) {
      this.showScore(ctx)
    } else {
      ctx.drawImage(img, this.x, this.y, this.width, this.height, 0, 0, this.width, this.height);
      this.drawCountdown(ctx)
  
      if (this.paused) {
        ctx.font = "80px Baloo";
        ctx.textAlign = "center";
        ctx.fillText("PAUSED", this.width / 2, this.height / 2);
      }
    }
  }

  drawCountdown(ctx) {
    ctx.font = "50px Baloo";
    ctx.fillStyle = "black";
    ctx.textAlign = "center";
    ctx.fillText(this.countdown, this.width / 2, 50);
  }

  animate(ctx, img) {
    ctx.clearRect(0, 0, this.width, this.height)
    if (!this.gameover) this.update();
    this.draw(ctx, img)
  }
}