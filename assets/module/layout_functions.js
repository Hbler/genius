//// Imports
import { ColorIDs } from "./support.js";
import { checkMatch } from "./game.js";
import { currentSequence } from "./main.js";

//// Global Variables
const Board = document.getElementById("board");
const Diffs = document.getElementsByName("difficulty");
let Time = 1000;

//// Listeners
Diffs.forEach((d) => d.addEventListener("click", getDiff));

//// Functions
function getDiff() {
  let difficulty;
  for (let dif of Diffs) {
    if (dif.checked) difficulty = dif.value;
  }

  switch (difficulty) {
    case "noraml":
      Time = 1000;
      break;
    case "medium":
      Time = 800;
      break;
    case "hard":
      Time = 600;
      break;
  }

  currentSequence.splice(0, currentSequence.length);
  showGame(Board, difficulty);
}

function emptyBoard(parent) {
  const isItEmpty = parent.innerHTML === "";
  if (!isItEmpty) parent.innerHTML = "";
}

function blinker(id) {
  //Audio botoes luzes
  let audioSi = new Audio("../audio/si.wav");
  const color = document.getElementById(id);
  const cL = color.classList;
  cL.toggle("on");
  cL.toggle("off");
  audioSi.play()
}

function userBlinker() {
  let id = this.id;
  setTimeout(blinker, 0, id);
  setTimeout(blinker, 600, id);
}

function messageBlinker(id) {
  const message = document.getElementById(id);
  message.classList.toggle("clear");
}

function showGame(parent, difficulty) {
  emptyBoard(parent);
  const classList = parent.classList;

  ColorIDs.forEach((id) => {
    let color = document.createElement("div");
    if (id == "center") {
      let circle = document.createElement("div");
      circle.classList.add("circle");

      let gReady = document.createElement("p");
      gReady.id = "g-ready";
      gReady.classList.add("clear");
      gReady.innerText = "Preste atenção à sequência";

      let yTurn = document.createElement("p");
      yTurn.id = "y-turn";
      yTurn.classList.add("clear");
      yTurn.innerText = "Repita a sequência\nna ordem correta";

      let wait = document.createElement("p");
      wait.id = "wait";
      wait.classList.add("clear");
      wait.innerText = "Acertou!\n";

      circle.appendChild(wait);
      circle.appendChild(gReady);
      circle.appendChild(yTurn);

      color.classList.add(`${id}`);
      color.appendChild(circle);
      parent.appendChild(color);
    } else {
      color.id = id;
      color.classList.add("option");
      color.classList.add("off");
      color.addEventListener("click", checkMatch);
      color.addEventListener("click", userBlinker);
      parent.appendChild(color);
    }
  });
  

  classList.remove(...classList);
  classList.add(difficulty);
}

//// Export
export { Diffs, Time, getDiff, blinker, messageBlinker };
