import Salmon from "./salmon";
import Level from "./level";
import Camera from "./camera";

export default class SalmonRun {
  constructor(canvas, cam) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.dimensions = {
      width: canvas.width,
      height: canvas.height
    };
    this.cam = cam.getContext("2d");
    this.camDim = {
      width: cam.width,
      height: cam.height
    }

    this.moveInput = {
      up: false,
      left: false,
      down: false,
      right: false,
    }

    this.running = true;

    this.registerEvents();
    this.restart();
  }

  play() {
    if (!this.running) {
      this.running = true;
      this.animate();
    }
  }

  pause() {
    if (this.running) {
      this.running = false;
    }
  }

  gameOver() {
    return !this.salmon.alive
  }

  restart() {
    this.running = false;
    this.salmon = new Salmon(30);
    this.level = new Level(this.dimensions);
    this.camera = new Camera(0, 0, this.camDim.width, this.camDim.height, this.dimensions.width, this.dimensions.height);
    this.camera.follow(this.salmon);

    this.animate();
  }

  registerEvents() {
    // this.ctx.canvas.addEventListener("mousedown", this.click.bind(this));
    document.addEventListener("keydown", this.keyDown.bind(this));
    document.addEventListener("keyup", this.keyUp.bind(this));
  }

  click(e) {
    if (!this.running) this.play();

    // if (this.level.atSurface(this.salmon)) this.salmon.jump();
  }

  keyDown(e) {
    // if (!this.running) this.play();
    console.log(e.key)
    
    if (e.key === 'w' || e.key === 'ArrowUp') this.moveInput.up = true;
    if (e.key === 'a' || e.key === 'ArrowLeft') this.moveInput.left = true;
    if (e.key === 's' || e.key === 'ArrowDown') this.moveInput.down = true;
    if (e.key === 'd' || e.key === 'ArrowRight') this.moveInput.right = true;

    if (e.key === 'p' || e.key === 'Escape') this.pause()
    if (e.key === ' ') this.play()
  }

  keyUp(e) {
    if (e.key === 'w' || e.key === 'ArrowUp') this.moveInput.up = false;
    if (e.key === 'a' || e.key === 'ArrowLeft') this.moveInput.left = false;
    if (e.key === 's' || e.key === 'ArrowDown') this.moveInput.down = false;
    if (e.key === 'd' || e.key === 'ArrowRight') this.moveInput.right = false;
  }

  salmonMove() {
    if (this.moveInput.up) this.salmon.moveUp();
    if (this.moveInput.left) this.salmon.moveLeft();
    if (this.moveInput.down) this.salmon.moveDown();
    if (this.moveInput.right) this.salmon.moveRight();
    this.level.inLevel(this.salmon)
  }

  animate() {
    console.log(this.running)
    this.ctx.clearRect(0, 0, this.dimensions.width, this.dimensions.height)

    if (this.level.atSurface(this.salmon)) this.salmonMove();

    this.level.animate(this.ctx, this.salmon);
    this.salmon.animate(this.ctx);
    this.camera.animate(this.cam, this.canvas)

    if (this.gameOver()) {
      this.restart();
    }

    if (this.running) {
      requestAnimationFrame(this.animate.bind(this))
    }
  }

}