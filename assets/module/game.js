//// Imports
import { PossibleColors } from "./support.js";
import { Diffs, blinker, messageBlinker } from "./layout_functions.js";
import { currentSequence } from "./main.js";

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
let playerClick = 0;
let Round = 1;
let Points = 0;
let Time = 1000;

//// Functions
function randomSequecer(cS) {
  let difficulty;
  Diffs.forEach((d) => {
    if (d.checked) difficulty = d.value;
  });
  const source = PossibleColors[`${difficulty}`];
  const nextColor = source[Math.floor(Math.random() * source.length)];
  cS.push(nextColor);
}

function showSequence(arr) {
  let t;
  playerClick === 0 ? (t = Time + 3000) : (t = Time);

  arr.forEach((c) => {
    setTimeout(blinker, t, c);
    setTimeout(blinker, t + 600, c);
    t += Time;
  });
}

function gameMessages() {
  let cSL = currentSequence.length;
  let pC = playerClick;
  let t = Time;

  switch (pC) {
    case 0:
      setTimeout(messageBlinker, t, "g-ready");
      setTimeout(messageBlinker, t + 2000, "g-ready");
      setTimeout(messageBlinker, t + 2300, "y-turn");
      setTimeout(messageBlinker, t + 4300, "y-turn");
      break;
    case cSL:
      setTimeout(messageBlinker, t, "wait");
      setTimeout(messageBlinker, t + 2000, "wait");
      break;
  }
}

function checkMatch() {
  const colorClicked = this.id;
  let cS = currentSequence;
  let pC = playerClick;
  if (colorClicked === cS[pC]) {
    playerClick++;
    if (pC === cS.length - 1) {
      gameMessages();
      playerClick = 0;
      play();
    }
  } else {
    Summary.classList.toggle("clear");
  }
}

function play() {
  randomSequecer(currentSequence);
  gameMessages();
  showSequence(currentSequence);
}

//// Export
export { Score, Time, checkMatch, play };
