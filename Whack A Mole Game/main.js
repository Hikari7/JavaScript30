const holes = document.querySelectorAll(".hole");
const scoreBoard = document.querySelector(".score");
const moles = document.querySelectorAll(".mole");
let lastHole;
let timeUp = false;
let score = 0;

function randomTime(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function randomHole(holes) {
  const idx = Math.floor(Math.random() * holes.length); //holeの数分をランダムに出す
  const hole = holes[idx];
  if (hole === lastHole) {
    console.log("Ah nah that's the same one");
    return randomHole(holes);
  }

  lastHole = hole;
  return hole;
}

function peep() {
  const time = randomTime(200, 1000); //出す時間
  const hole = randomHole(holes); //出す穴
  hole.classList.add("up");
  setTimeout(() => {
    hole.classList.remove("up");
    if (!timeUp) peep(); //完全にストップすることはない
  }, time);
}

function startGame() {
  scoreBoard.textContent = 0;
  timeUp = false; //trueだったら止まる
  score = 0;
  peep();
  setTimeout(() => timeUp = true, 10000);
}

function bonk(e) {
  if (!e.isTrusted) return;
  //なんかJSでchatingをするのを防ぐ
  score++;
  this.parentNode.classList.remove("up");
  scoreBoard.textContent = score;
}

moles.forEach((mole) => mole.addEventListener("click", bonk));
