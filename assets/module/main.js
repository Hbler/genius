//// Imports
import { getDiff } from "./layout_functions.js";
import { StartGame, TryAgain, Reset, NewGame, play } from "./game.js";

//// Global Variables
const currentSequence = [];

//// Listeners
StartGame.addEventListener("click", play);
TryAgain.addEventListener("click", play);
Reset.addEventListener("click", play);
NewGame.addEventListener("click", play);

//// Functions
getDiff();

//// Export
export { currentSequence };
