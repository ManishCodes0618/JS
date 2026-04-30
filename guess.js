let max = prompt("Enter the maximum number");

let guess = prompt("Enter your guess");
while (true) {
  if (guess == "q") {
    break;
  }
  if (guess > max) {
    guess = prompt("Too high! Enter a new guess");
  } else if (guess == max) {
    alert("Congratulations! You guessed the number.");
    break;
  } else {
    guess = prompt("Too low! Enter a new guess");
  }
}
