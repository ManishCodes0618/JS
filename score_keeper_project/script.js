const one = document.querySelector("#one");
const two = document.querySelector("#two");
const reset = document.querySelector("#reset");
const p1 = document.querySelector("#p1");
const p2 = document.querySelector("#p2");

let p1Score = 0;
let p2Score = 0;

let winningScore = 1;
let gameOver = false;

let points = document.querySelector("#points");

const resetFunc = () => {
  p1Score = 0;
  p2Score = 0;
  p1.textContent = p1Score;
  p2.textContent = p2Score;
  gameOver = false;
  p1.classList.remove("winner");
  p1.classList.remove("loser");
  p2.classList.remove("winner");
  p2.classList.remove("loser");
};

points.addEventListener("change", () => {
  winningScore = parseInt(points.value);
  resetFunc();
});

one.addEventListener("click", () => {
  if (!gameOver) {
    p1Score += 1;
    if (p1Score === winningScore) {
      gameOver = true;
      p1.classList.add("winner");
      p2.classList.add("loser");
    }
    p1.textContent = p1Score;
  }
});

two.addEventListener("click", () => {
  if (!gameOver) {
    p2Score += 1;
    if (p2Score === winningScore) {
      gameOver = true;
      p2.classList.add("winner");
      p1.classList.add("loser");
    }
  }
  p2.textContent = p2Score;
});

reset.addEventListener("click", resetFunc);
