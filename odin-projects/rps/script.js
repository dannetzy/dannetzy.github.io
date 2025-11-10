console.log("Welcome to Rock Paper Scissors!");

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissor'];
  const choice = Math.floor(Math.random() * 3);

  return choices[choice];
}

function getHumanChoice() {
  const choice = prompt("play rock paper scissors");
  if (!choice) {
    alert("thanks for playing (or not) rock paper scissors!");
    return;
  }
  if (choice === 'rock' || choice === 'paper' || choice === 'scissor') {
    return choice.toLowerCase();
  }
  alert("please enter a valid keyword (input blank or cancel to abort the game)sci");
  getHumanChoice();
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    console.log("Tie!");
    computerScore++; 
    humanScore++;
    return;
  }
  switch (humanChoice) {
    case "rock":
      switch (computerChoice) {
        case "paper":
          console.log("You lose! Rock gets beaten by paper.")
          computerScore++;
          break;
        case "scissor":
          console.log("You win! Rock beats scissor.");
          humanScore++;
          break;
      }
      break;
    case "paper":
      switch (computerChoice) {
        case "rock":
          console.log("You win! Paper beats rock.")
          humanScore++;
          break;
        case "scissor":
          console.log("You lose! Paper gets beaten by scissor.");
          computerScore++;
          break;
      }
      break;
    case "scissor":
      switch (computerChoice) {
        case "rock":
          console.log("You lose! Scissor gets beaten by rock.")
          computerScore++;
          break;
        case "paper":
          console.log("You win! Scissor beats paper.");
          humanScore++;
          break;
      }
      break;
  }
}

function playGame() {
  for (let i = 0; i < 5; i++) {
    playRound(getHumanChoice(), getComputerChoice());
  }
  if (humanScore > computerScore) {
    console.log(`Human wins! ${humanScore}:${computerScore}`);
  } else if (humanScore == computerScore) {
    console.log("tie!")
  } else {
    console.log(`Computer wins! ${humanScore}:${computerScore}`);
  }
}
/*
paper paper     \
rock rock        > Tie!
scissor scissor /

paper scissor: B
rock paper: B
scissor rock: B

scissor paper: A
paper rock: A
rock scissor: A
*/