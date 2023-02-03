const X = "X";
const O = "O";

let xTurn = true;
const gameGrid = document.querySelector(".game-grid");
const buttons = gameGrid.querySelectorAll("button");

// function to switch turns on click
function switchTurn(player) {
  console.log(`current player is ${player}`);
  if (player === X) {
    xTurn = false;
  } else {
    xTurn = true;
  }
}

// Handes click on the button
function handleClick(e) {
  const currentPlayer = xTurn ? X : O; // Returns X or O depending on the player who clicks
  e.innerHTML = currentPlayer;
  switchTurn(currentPlayer);
}

// Updates button text in the background based on mouse-in/out event
function handleHover(e, action) {
  const currentPlayer = xTurn ? X : O; // Returns X or O depending on the player who clicks
  if (action) {
    e.innerHTML = currentPlayer;
  } else { e.innerHTML = ""; }
}

// Main function
buttons.forEach((button) => {
  // Handles click, swutches player
  button.addEventListener("click", () => {
    handleClick(button);
    button.setAttribute("disabled", true); // We want the button to be clicked only once
  });

  // Handling mouseover action
  button.addEventListener("mouseover", () => {
    handleHover(button, true);
  });

  // Handling mouseout action
  button.addEventListener("mouseout", () => {
    handleHover(button, false);
  });
});

// Check for win
// Check for tie
