//import { getRandomColor } from "./utils/randomColor.js"
import { Pentagon } from "./components/Pentagon/pentagon.js"
import { Circle } from "./components/Circle/circle.js"
import { Square } from "./components/Square/square.js"
console.clear();

const root = document.getElementById("root");

const circleElement = Circle();

const squareElement = Square();

const pentagonElement = Pentagon();

root.append(circleElement, squareElement, pentagonElement);
