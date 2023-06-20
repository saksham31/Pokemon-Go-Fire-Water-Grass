const player = {
  currentChoice: null
};

const computer = {
  currentChoice: null
};

let playerScore = 0;
let computerScore = 0;

function buttonClick(e) {
  const choices = ['Fire', 'Water', 'Grass'];
  const randomIndex = Math.floor(Math.random() * choices.length);
  computer.currentChoice = choices[randomIndex]

  if (e.target.id === 'generate-fire'){
    player.currentChoice = choices[0]
  } else if (e.target.id === 'generate-water') {
    player.currentChoice = choices[1]
  } else {
    player.currentChoice = choices[2]
  }

//   Tie game prompt
  if (computer.currentChoice === player.currentChoice) {
    document.getElementById('results').innerText = "It's a tie! You both chose " + computer.currentChoice;
  } 
  
  else if (computer.currentChoice === choices[0]) {
    if (player.currentChoice === choices[1]) {
      playerScore += 1;
      document.getElementById('player-score').innerText = playerScore;
      document.getElementById('results').innerText = "You win! The Computer chose " + computer.currentChoice + " and You chose " + player.currentChoice; 
    } else {
      computerScore += 1;
      document.getElementById('computer-score').innerText = computerScore;
      document.getElementById('results').innerText = "The Computer wins! The Computer chose " + computer.currentChoice + " and You chose " + player.currentChoice;
    }
  } else if (computer.currentChoice === choices[1]) {
    if (player.currentChoice === choices[2]) {
      playerScore += 1;
      document.getElementById('player-score').innerText = playerScore;
      document.getElementById('results').innerText = "You win! The Computer chose " + computer.currentChoice + " and You chose " + player.currentChoice;
    } else {
      computerScore += 1;
      document.getElementById('computer-score').innerText = computerScore;
      document.getElementById('results').innerText = "The Computer wins! The Computer chose " + computer.currentChoice + " and You chose " + player.currentChoice;
    }
  } else if (computer.currentChoice === choices[2]) {
    if (player.currentChoice === choices[0]) {
    playerScore += 1;
    document.getElementById('player-score').innerText = playerScore;
    document.getElementById('results').innerText = "You win! The Computer chose " + computer.currentChoice + " and You chose " + player.currentChoice;
    } else {
      computerScore += 1;
      document.getElementById('computer-score').innerText = computerScore;
      document.getElementById('results').innerText = "The Computer wins! The Computer chose " + computer.currentChoice + " and You chose " + player.currentChoice;
    }
  }
}

let resetScore = 0;
let resetText = '';


// Start over resets score and text
function resetClick(e) {
  resetScore;
  resetText;
  playerScore = 0;
  computerScore = 0;
  document.getElementById('reset-btn').value
  document.getElementById('player-score').innerText = resetScore;
  document.getElementById('computer-score').innerText = resetScore;
  document.getElementById('results').innerText = resetText;
}

document.getElementById('generate-fire').addEventListener('click', buttonClick);

document.getElementById('generate-grass').addEventListener('click', buttonClick);

document.getElementById('generate-water').addEventListener('click', buttonClick);

document.getElementById('reset-btn').addEventListener('click', resetClick);