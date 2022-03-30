//// Imports
import { PossibleColors } from "./support.js";
import { Diffs } from "./layout_functions.js";
import { currentSequence, playerClick } from "./main.js";

//// Global Variables
/// Display Elements
const Board = document.getElementById("board");
const Score = document.getElementById("score-board");
const Summary = document.getElementById("summary");
/// Buttons
const StartGame = document.getElementById("start");
const Reset = document.getElementById("reset");
const TryAgain = document.getElementById("try");
const NewGame = document.getElementById("new");
/// Gameplay
let Round = 1;
let Points = 0;

//// Functions
function randomSequecer(cS) {
  let difficulty;
  Diffs.forEach((d) => {
    if (d.checked) difficulty = d.value;
  });
  const source = PossibleColors[`${difficulty}`];
  const nextColor = source[Math.floor(Math.random() * source.length)];
  cS.push(nextColor);
  console.log(cS);
}

function checkMatch() {
  const colorClicked = this.id;
  let cS = currentSequence;
  let pC = playerClick;

  if (colorClicked === cS[pC]) {
    pC++;
  } else {
    Summary.classList.toggle("clear");
  }
}

//// Export
export { randomSequecer, checkMatch };
