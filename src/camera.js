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
    this.atStart = true
    this.gameover = false

    this.countdown = 60

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

  showStartScreen(ctx) {
    this.blackScreen(ctx)
    this.showTitle(ctx)
    this.showStartDir(ctx)
  } 

  showTitle(ctx) {
    ctx.font = "90px Baloo";
    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    let text = "Salmon Run"
    ctx.fillText(text, this.width / 2, this.height / 2);
  }

  showStartDir(ctx) {
    ctx.font = "20px Baloo";
    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    let text = "Press Space to Start"
    ctx.fillText(text, this.width / 2, (this.height / 3) * 2.5);
  }

  showEndScreen(ctx) {
    this.blackScreen(ctx)
    this.showScore(ctx)
    this.showReplay(ctx)
  }

  showReplay(ctx) {
    ctx.font = "20px Baloo";
    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    let text = "Press Space to Replay"
    ctx.fillText(text, this.width / 2, (this.height / 3) * 2.5);
  }

  showScore(ctx) {
    ctx.font = "50px Baloo";
    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    let text = "Food Score: " + this.score
    ctx.fillText(text, this.width / 2, this.height / 3);
    text = "Salmon Size: " + this.salmonSize
    ctx.fillText(text, this.width / 2, (this.height / 3) * 1.5);
  }

  blackScreen(ctx) {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, this.width, this.height)
  }

  showPause(ctx) {
    if (this.paused) {
      ctx.font = "80px Baloo";
      ctx.textAlign = "center";
      ctx.fillText("PAUSED", this.width / 2, this.height / 2);

      ctx.font = "20px Baloo";
      let text = "Press Space to continue"
      ctx.fillText(text, this.width / 2, (this.height / 3) * 2.5);
    }
  }

  draw(ctx, img) {
    if (this.atStart) {
      this.showStartScreen(ctx)
    } else {
      if (this.gameover) {
        this.showEndScreen(ctx)
      } else {
        ctx.drawImage(img, this.x, this.y, this.width, this.height, 0, 0, this.width, this.height);
        this.drawCountdown(ctx)
        
        this.showPause(ctx)
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