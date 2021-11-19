function Ship() {
  this.level = 1;
  this.score = 0;

  this.y = height / 2;
  this.x = 20;

  this.show = function () {
    fill(255);
    // rectMode(CENTER);
    rect(this.x - 40, this.y - 20, 20, 60);
    rect(this.x - 20, this.y - 10, 20, 40);
    rect(this.x, this.y, 20, 20);
  };

  this.move = function (x, y) {
    this.x += x * 50;
    this.y += y * 50;
  };

  this.levelUp = function () {
    this.level += 1;
  };

  this.getAccelerator = function () {
    return 7;
  };
  this.getDeathZone = function () {
    return 200;
  };

  this.isDead = function (alien) {
    let d = dist(this.x, this.y, alien.x, alien.y);
    if (d < alien.r + 10) {
      return true;
    } else return false;
  };

  this.destroy = function () {
    textSize(100);
    console.log(innerWidth);
    console.log(innerHeight);
    text('YOU DEAD', 300, 100);
    //this = null
  };
}
