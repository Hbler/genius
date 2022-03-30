//// Imports
import { getDiff } from "./layout_functions.js";
import { Score, StartGame, TryAgain, play } from "./game.js";

//// Global Variables
const Points = Score.childNodes[1];
let currentPoints = +Points.innerText.split(" ")[1];
const Rounds = Score.childNodes[3];
let currentRound = +Rounds.innerText.split(" ")[1];
const currentSequence = [];

//// Listeners
StartGame.addEventListener("click", play);
TryAgain.addEventListener("click", play);

//// Functions
getDiff();

console.log(currentPoints, currentRound);

//// Export
export { currentSequence };
