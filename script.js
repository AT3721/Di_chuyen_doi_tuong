

function Hero(image, top, left, size, speed) {
  this.image = image;
  this.top = top;
  this.left = left;
  this.size = size;
  this.speed = speed;

  this.getHeroElement = function () {
    return '<img width="' + this.size + '"' +
      ' height="' + this.size + '"' +
      ' src="' + this.image + '"' +
      ' style="top: ' + this.top + 'px; left:' + this.left + 'px;position:absolute;" />';
  }

  this.moveRight = function () {
    this.left += this.speed;
    console.log('ok: ' + this.left);
  }
  this.moveLeft = function () {
    this.left -= this.speed;
  }
  this.moveUp = function () {
    this.top -= this.speed;
  }
  this.moveDown = function () {
    this.top += this.speed;
  }
}

var hero = new Hero('doraemon.png', 20, 30, 200, 50);

function render() {
  document.getElementById('game').innerHTML = hero.getHeroElement();
}
window.addEventListener('keydown', function (e) {
  switch (e.key) {
    case 'ArrowUp':
      if (hero.top > 0) hero.moveUp();
      break;
    case 'ArrowDown':
      if (hero.top < window.innerHeight - hero.size) hero.moveDown();
      break;
    case 'ArrowLeft':
      if (hero.left > 0) hero.moveLeft();
      break;
    case 'ArrowRight':
      if (hero.left < window.innerWidth - hero.size) hero.moveRight();
      break;
  }
  render(); 
});
render();