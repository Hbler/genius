//// Imports
import { PossibleColors } from "./support.js";
import { Diffs, Time, blinker, messageBlinker } from "./layout_functions.js";
import { currentSequence } from "./main.js";

//// Global Variables
/// Display Elements
const Score = document.getElementById("score-board");
const Points = Score.childNodes[1];
let currentPoints = +Points.innerText.split(" ")[1];
const Rounds = Score.childNodes[3];
let currentRound = +Rounds.innerText.split(" ")[1];
const Summary = document.getElementById("summary");
const sMessage = document.getElementById("sum-message");
/// Buttons
const StartGame = document.getElementById("start");
const TryAgain = document.getElementById("try");
const Reset = document.getElementById("reset");
const NewGame = document.getElementById("new");
/// Gameplay
let Difficulty;
let playerClick = 0;

//// Functions
function randomSequecer(cS) {
  const source = PossibleColors[`${Difficulty}`];
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

function updatePoints() {
  let roundPoint;

  switch (Difficulty) {
    case "normal":
      roundPoint = 1;
      break;
    case "medium":
      roundPoint = 2;
      break;
    case "hard":
      roundPoint = 3;
      break;
  }

  currentPoints += roundPoint;

  switch (true) {
    case currentPoints < 10:
      Points.innerText = `Pontos: 00${currentPoints}`;
      break;
    case currentPoints > 9:
      Points.innerText = `Pontos: 0${currentPoints}`;
      break;
    case currentPoints > 99:
      Points.innerText = `Pontos: ${currentPoints}`;
  }
}

function updateRounds() {
  currentRound++;
  Rounds.innerText = `Rodada: ${currentRound}`;
}

function checkForClear(node, state) {
  switch (state) {
    case "contain":
      if (node.classList.contains("clear")) node.classList.toggle("clear");
      break;
    case "not":
      if (!node.classList.contains("clear")) node.classList.toggle("clear");
      break;
  }
}

function createSummary() {
  sMessage.innerHTML = "";
  sMessage.innerHTML = `<h3>Fim da Partida</h3><p>Nessa partida você chegou na ${currentRound}ª rodada!</p><p>E conseguiu ${currentPoints} pontos</p><p>Agora você pode <span>tentar novamente</span> em uma nova partida, na mesma ou em outra dificuldade, e continuar pontuando...</p> <p>Ou <span>zerar o placar</span> e começar um novo jogo.</p>`;
}

function checkMatch() {
  const colorClicked = this.id;
  let cS = currentSequence;
  let pC = playerClick;

  if (colorClicked === cS[pC]) {
    playerClick++;
    updatePoints();
    if (pC === cS.length - 1) {
      updateRounds();
      gameMessages();
      playerClick = 0;
      play();
    }
  } else {
    createSummary();
    Summary.classList.toggle("clear");
  }
}

function reset() {
  currentPoints = 0;
  currentRound = 1;
  Points.innerText = "Pontos: 000";
  Rounds.innerText = "Rodada: 1";
}

function play() {
  // Set difficulty
  Diffs.forEach((d) => {
    if (d.checked) Difficulty = d.value;
  });

  // Reset
  if (this !== undefined) {
    if (this.id === "start" || this.id === "try") {
      checkForClear(Reset, "contain");
      checkForClear(Rounds, "contain");
      currentSequence.splice(0, currentSequence.length);
      currentRound = 1;
      Rounds.innerText = "Rodada: 1";
      playerClick = 0;
    }
    if (this.id === "reset" || this.id === "new") {
      checkForClear(Rounds, "not");
      checkForClear(Reset, "not");
      checkForClear(Summary, "not");
      currentSequence.splice(0, currentSequence.length);
      playerClick = 0;
      reset();
      return;
    }
  }

  checkForClear(Summary, "not");

  // Gameplay
  randomSequecer(currentSequence);
  gameMessages();
  showSequence(currentSequence);
}

//// Export
export { Score, StartGame, TryAgain, Reset, NewGame, checkMatch, play };
