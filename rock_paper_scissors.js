var userChoice = prompt("Do you choose rock, paper or scissors?");
if (userChoice != "rock" || userChoice != "paper" || userChoice != "scissors"){
 console.log("Invalid input");   
}
var computerChoice = Math.random();
if (computerChoice < 0.34) {
	computerChoice = "rock";
} else if(computerChoice <= 0.67) {
	computerChoice = "paper";
} else {
	computerChoice = "scissors";
} console.log("Computer: " + computerChoice);

var compare = function(choice1,choice2){
 if(choice1 === choice2){
  return "The result is a tie!";   
 }
 else if (choice2 === "scissors" && choice1 === "rock"){
  return "rock wins";   
 }
 else if (choice1 === "paper" ){
  if (choice2 === "rock"){
   return "paper wins";
  }
  else if (choice2 === "scissors"){
   return "scissors wins";   
  }
  }
  else if (choice1 === "scissors"){
    if (choice2 === "rock"){
   return "rock wins";
  }
  else if (choice2 === "paper"){
   return "scissors wins";   
  }  
  }
 else {
  return "Paper wins";   
 }
}
compare(userChoice,computerChoice);