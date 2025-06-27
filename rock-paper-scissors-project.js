
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
const choiceButton = document.querySelector("#choiceButton");
const log = document.querySelector("#log");

choiceButton.addEventListener("click", () => {
  let choice = prompt("What your guess?");

  if (choice === "paper" || choice === "rock" || choice === "scissors") {
    log.innerText = "OK";
  } else {
    log.innerText = "Try again";
  }
});