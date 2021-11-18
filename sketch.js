function setup() {
  ship = new Ship();
  aliens = [];
  shots = [];

  createCanvas(1670, 500);
  for (let i = 0; i < ship.level; i++) {
    aliens[i] = new Alien();
  }
}

function draw() {
  background(50);
  ship.show();

  for (let i = 0; i < aliens.length; i++) {
    aliens[i].show();
    aliens[i].move(ship.x, ship.y, 10, 100);
  }

  for (let i = 0; i < shots.length; i++) {
    shots[i].show();
    shots[i].move();
    if (shots[i].destroy()) {
      shots.splice(i, 1);
      break;
    }
    for (let j = 0; j < aliens.length; j++) {
      if (shots[i].isHit(aliens[j])) {
        aliens.splice(j, 1);
        shots.splice(i, 1);
        break;
      }
    }
  }

  if (aliens.length === 0) {
    levelHandler(ship, aliens);
  }
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    ship.move(0, -1);
  }
  if (keyCode === DOWN_ARROW) {
    ship.move(0, 1);
  }
  if (keyCode === LEFT_ARROW) {
    ship.move(-1, 0);
  }
  if (keyCode === RIGHT_ARROW) {
    ship.move(1, 0);
  }
  if (keyCode === 32) {
    shots.push(new Shot(ship.x, ship.y, 'fire', 5));
  }
}

function levelHandler(ship, aliens) {
  ship.levelUp();
  for (let i = 0; i < ship.level; i++) {
    aliens[i] = new Alien();
  }
}
