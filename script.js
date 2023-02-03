const X = "X";
const O = "O";
const winCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

let xTurn = true;
let gameProgress = 0;
let result = null;
const grid = Array(9).fill(null);
let message = null;

const gameGrid = document.querySelector(".game-grid");
const buttons = gameGrid.querySelectorAll("button");
const progressBar = document.querySelector("#game-progress");
const messageBar = document.querySelector(".alert");

function startGame() {
  // Main function
  messageBar.style.display = "none";
  buttons.forEach((button) => {
    // Handles click, if not win/ tie, switches player else returns win message
    button.addEventListener("click", () => {
      // eslint-disable-next-line no-use-before-define
      handleClick(button);

      // check for win condition
      // eslint-disable-next-line no-use-before-define
      checkWinCondition();
      if (result === X) {
        message = `Player ${result} won the game!`;
      } else if (result === O) {
        message = `Player ${result} won the game!`;
      } else if (result === "tie") {
        message = "It's a Tie!";
      }

      if (message) {
        messageBar.innerHTML = message;
        messageBar.style.display = "block";
      }

      button.setAttribute("disabled", true);
    });

    // Handling mouseover action
    button.addEventListener("mouseover", () => {
      // eslint-disable-next-line no-use-before-define
      handleHover(button, true);
    });

    // Handling mouseout action
    button.addEventListener("mouseout", () => {
      // eslint-disable-next-line no-use-before-define
      handleHover(button, false);
    });
  });
  // end of start game
}

// function to switch turns on click
function switchTurn(player) {
  if (player === X) {
    xTurn = false;
  } else {
    xTurn = true;
  }
}

// Handes click on the button
function handleClick(e) {
  const currentPlayer = xTurn ? X : O; // Returns X or O depending on the player who clicks
  gameProgress += 1;
  progressBar.value = gameProgress;
  // update the grid to current player's mark
  e.innerHTML = currentPlayer;
  // get the id of the cell which is also the grid array index & update the grid with player sign
  const index = parseInt(e.id, 10);
  grid[index] = currentPlayer;
  switchTurn(currentPlayer);
}

// Updates button text in the background based on mouse-in/out event
function handleHover(e, action) {
  const currentPlayer = xTurn ? X : O; // Returns X or O depending on the player who clicks
  if (action) {
    e.innerHTML = currentPlayer;
  } else { e.innerHTML = ""; }
}

// takes a grid and checks if there is a win condition
function checkWinCondition() {
  for (let i = 0; i < winCombinations.length; i += 1) {
    const [a, b, c] = winCombinations[i];
    if (grid[a] === grid[b] && grid[b] === grid[c]) {
      result = grid[a];
      break;
    }
  }
  if (!grid.includes(null) && result === null) {
    result = "tie";
  }
}

startGame();
