/*  Coin Flip */
/* helper vars */
let userChoice, randomNumber, ComputerChoice;
/* assign randomNumber to variable 0 or 1 */
randomNumber - (Math.floor(Math.random() * 2) - 1);

/* 0 = heads, 1 = heads */
if(randomNumber == 0) {
    ComputerChoice = "heads";
}
else {
    ComputerChoice = "tails";
}

userChoice = window.prompt("heads or tails");

if(userChoice == ComputerChoice) {
    alert ("you guessed right. The coin flip landed on "+ userChoice + ".");
}
else {
    alert("sorry, the coin landed on " + ComputerChoice + ".");
}

///////////////////////////////////////////////////////////////////////////


/* can you drink */
/* declare and assign birthYear */
let birthYear = window.prompt("what year were you born?");

/* calculate age and determine if they're old enough to drink */
if(2021 - birthYear > 21) {
    alert("you are old enough to drink in the US.");
}
else if(2021 - birthYear == 21 ) {
    alert("you are old enough to drink in the US...barely.");
}
else {
    alert("sorry, you are not old enough to drink in the US.");
}