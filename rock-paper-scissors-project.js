
function getHumanChoice() {
  let choice = prompt("Enter your choice(rock, paper or scissors):");
  while (choice === null || (choice.toLowerCase() !== "rock" && choice.toLowerCase() !== "paper" && choice.toLowerCase() !== "scissors")) {
    choice = prompt("Invalid choice. Please enter rock, paper, or scissors:");
  }
  return choice.toLowerCase();
}


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

let humanScore = 0;
let computerScore = 0;
function playGame() {
  function playRound(humanChoice, computerChoice) {
    console.log(`Your Choice: ${humanChoice}. Computer: ${computerChoice}`);
    
    if (humanChoice === computerChoice) {
      console.log("The result is even");
      return; // No score increment for a tie
    }

    if ((humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")) {
      humanScore += 1;
      console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
    } else {
      computerScore += 1;
      console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
    }
  }

  for (let i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  }

  console.log(`Final Score - You: ${humanScore}, Computer: ${computerScore}`);
}

playGame();
