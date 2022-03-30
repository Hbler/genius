//// Imports
import { getDiff } from "./layout_functions.js";
import { randomSequecer } from "./game.js";

//// Global Variables
const currentSequence = [];
let playerClick = 0;

//// Functions
getDiff();
randomSequecer(currentSequence);

//// Export
export { currentSequence, playerClick };
