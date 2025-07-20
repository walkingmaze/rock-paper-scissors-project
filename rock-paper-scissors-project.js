
function getHumanChoice() {
  let choice = prompt("Enter your choice(rock, paper or scissors):");
  while (choice === null || (choice.toLowerCase() !== "rock" && choice.toLowerCase() !== "paper" && choice.toLowerCase() !== "scissors")) {
    choice = prompt("Invalid choice. Please enter rock, paper, or scissors:");
  }
  return choice.toLowerCase();
}

const choiceButton = document.getElementById("choiceButton");
choiceButton.addEventListener("click",function() {
  const userChoice = getHumanChoice();
  if (userChoice !== null) {
  console.log("User choice:", userChoice);
} else {
  console.log("User cancelled the prompt")
}
});

let min = 1;
let max = 3;
function getComputerChoice() { const getRandomNumber = Math.floor(Math.random()*(max-min+1))+min;
if (getRandomNumber === 1) { 
return "paper";
} else if (getRandomNumber === 2) {
return "rock";
} else {
return "scissors";
}
}

function playGame() {
let humanScore = 0;
let computerScore = 0;

function playRound(getHumanChoice, getComputerChoice) {
if (getHumanChoice === "rock" && getComputerChoice === "scissors") {
  humanScore +=1;
    console.log("You win. Rock breaks scissors");
    return ("Your Choice: " + getHumanChoice + ". " + "Computer: " + getComputerChoice);
} else if (getHumanChoice === "paper" && getComputerChoice === "rock") {
  humanScore +=1;
    console.log("You win! Paper covers rock");
    return ("Your Choice: " + getHumanChoice + ". " + "Computer: " + getComputerChoice);
} else if 
  (getHumanChoice === "scissors" && getComputerChoice === "paper") {
  humanScore +=1;
   console.log("You win! Scissors cut paper");
   return ("Your Choice: " + getHumanChoice + ". " + "Computer: " + getComputerChoice);
} else if (getHumanChoice === "scissors" && getComputerChoice === "rock") {
  computerScore += 1;
  console.log("You lose! Rock breaks scissors");
   return ("Your Choice: " + getHumanChoice + ". " + "Computer: " + getComputerChoice);
} else if (getHumanChoice === "rock" && getComputerChoice === "paper") {
  computerScore += 1;
    console.log("You lose. Paper covers rock");
    return ("Your Choice: " + getHumanChoice + ". " + "Computer: " + getComputerChoice);
} else if (getHumanChoice === "paper" && getComputerChoice === "scissors") {
  computerScore += 1;
    console.log("You lose! Scissors cut paper");
   return ("Your Choice: " + getHumanChoice + ". " + "Computer: " + getComputerChoice);
} else {
  humanScore += 1;
  computerScore += 1;
  console.log("The result is even");
  return ("Your Choice: " + getHumanChoice + ". " + "Computer: " + getComputerChoice);
} 
  }
  for (let i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    const currentRound = playRound(humanSelection, computerSelection);
    console.log(currentRound);
  }

console.log(`Final Score - You: ${humanScore}, Computer: ${computerScore}`);
}

