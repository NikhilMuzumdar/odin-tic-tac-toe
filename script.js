const gameGrid = document.querySelector(".game-grid");
const buttons = gameGrid.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    console.log(`${button.id} was clicked!`);
  });
});
