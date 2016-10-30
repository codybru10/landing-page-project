var secretNumber = 4;

var guess = parseInt(prompt("guess a number"));
alert(guess);

if (guess === secretNumber) {
  alert("you got it right!");
}

else if (guess > secretNumber) {
  alert("try again! too high!")
}

else if (guess < secretNumber) {
  alert("try again! too low!")
}
else {
  alert("wrrrong!")
}
