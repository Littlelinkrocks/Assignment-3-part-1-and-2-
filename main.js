// This is part 1 of 2
var userChoice = prompt("heads or tails");
var randomNumber;
var computerChoice;

if(Math.random() < 0.50) {
  ((randomNumber)== 0)
    computerChoice = "heads";
} else if ((randomNumber)== 1)
  computerChoice = "tails";


if (userChoice == computerChoice){
   alert("You guessed right! The coin flip landed on " + userChoice);
}if(userChoice !== computerChoice){
  alert("Sorry, the coin flip landed on " + computerChoice);
}



// Now this is part 2 of 2

var birthyear = prompt("year you were born in");

if((2021 - birthyear) > 21){
   alert("You are old enough to drink in the US.");
} else if ((2021 - birthyear)== 21){
   alert("You are old enough to drink in the US...barley.");
} else if ((2021 - birthyear) < 21);{
  alert("Sorry, you are not old enough to drink in the US.");
}
