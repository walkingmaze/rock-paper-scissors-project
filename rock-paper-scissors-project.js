
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