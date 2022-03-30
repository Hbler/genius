//// Imports
import { ColorIDs } from "./support.js";

//// Global Variables
const Board = document.getElementById("board");
const Diffs = document.getElementsByName("difficulty");

Diffs.forEach((x) => x.addEventListener("click", getDiff));

//// Functions
function getDiff() {
  let difficulty;
  for (let dif of Diffs) {
    if (dif.checked) difficulty = dif.value;
  }

  showGame(Board, difficulty);
}

function emptyBoard(parent) {
  const isItEmpty = parent.innerHTML === "";
  if (!isItEmpty) parent.innerHTML = "";
}

function showGame(parent, difficulty) {
  emptyBoard(parent);
  const classList = parent.classList;

  ColorIDs.forEach((id) => {
    let color = document.createElement("div");
    if (id == "center") {
      let circle = document.createElement("div");
      circle.classList.add("circle");
      color.classList.add(`${id}`);
      color.appendChild(circle);
      parent.appendChild(color);
    } else {
      color.id = id;
      //   color.addEventListener('click', checkOrder) - tem que criar essa função
      parent.appendChild(color);
    }
  });

  classList.remove(...classList);
  classList.add(difficulty);
}

export { getDiff };
