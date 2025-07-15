
let min = 1;
let max = 3;
function getComputerChoice() { const getRandomNumber = Math.floor(Math.random()*(max-min+1))+min;
if (getRandomNumber === 1) { 
return 'paper';
} else if (getRandomNumber === 2) {
return 'rock';
} else {
return 'scissors';
}
}

function getHumanChoice() {
  let choice = prompt("Enter your choice(rock, paper or scissors):").toLowerCase();
  while (choice !== "rock" && choice !== "paper" && choice !== "scissors") {
    choice = prompt("Invalid choice. Please enter rock, paper, or scissors:")
  }
  return choice;
}

const choiceButton = document.getElementById("choiceButton");
choiceButton.addEventListener("click",function() {
  const userChoice = getHumanChoice();
  console.log("User choice:", userChoice);
});

let humanScore = 0;
let computerScore = 0;
let playRound;
function playRound(getHumanChoice, getComputerChoice) {
if (getHumanChoice === "rock" && getComputerChoice === "scissors") {
  humanScore +=1;
    return "You win. Rock breaks scissors";
} else if (getHumanChoice === "paper" && getComputerChoice === "rock") {
  humanScore +=1;
    return "You win! Paper covers rock";
} else if 
  (getHumanChoice === "scissors" && getComputerChoice === "paper") {
  humanScore +=1;
    return "You win! Scissors cut paper";
} else if (getHumanChoice === "scissors" && getComputerChoice === "rock") {
  computerScore += 1;
    return "You lose! Rock breaks scissors";
} else if (getHumanChoice === "rock" && getComputerChoice === "paper") {
  computerScore += 1;
    return "You lose. Paper covers rock";
} else if (getHumanChoice === "paper" && getComputerChoice === "scissors") {
  computerScore += 1;
    return "You lose! Scissors cut paper";
} else {
  humanScore += 1;
  computerScore += 1;
  return "The result is even. Try again."
}
  }
function game() {
  for (let i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    const currentRound = playRound(humanSelection, computerSelection);
    console.log(currentRound);
  }
}


