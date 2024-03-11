console.clear();

const pizzaInput1 = document.querySelector('[data-js="pizza-input-1"]');
const pizza1 = document.querySelector('[data-js="pizza-1"]');
const pizzaInput2 = document.querySelector('[data-js="pizza-input-2"]');
const pizza2 = document.querySelector('[data-js="pizza-2"]');
const outputSection = document.querySelector('[data-js="output-section"]');

const output = document.querySelector('[data-js="output"]');

let pizzaSize1;
let pizzaSize2;

pizzaInput1.addEventListener("input", () => {
  // write your code here
  console.log("Go to previous question");
  pizzaSize1 = pizzaInput1.value;
  calculatePizzaGain(pizzaSize1, pizzaSize2);
});

pizzaInput2.addEventListener("input", () => {
  // write your code here
  console.log("Go to previous question");
  pizzaSize2 = pizzaInput2.value;
  calculatePizzaGain(pizzaSize1, pizzaSize2);
});

// Task 1
// define the function calculatePizzaGain here

function calculatePizzaGain(diameter1, diameter2) {
  let area1 = (diameter1 / 2) * (diameter1 / 2);
  let area2 = (diameter2 / 2) * (diameter2 / 2);
  let area1Fertig = area1 * Math.PI;
  let area2Fertig = area2 * Math.PI;
  console.log(area1Fertig);
  console.log(area2Fertig);
  let pizzaGain = ((area2Fertig - area1Fertig) / area1Fertig) * 100;
  let pizzaGainRounded = Math.round(pizzaGain);
  console.log(pizzaGainRounded);
  output.textContent = pizzaGainRounded;
  return pizzaGainRounded;
}

calculatePizzaGain(24, 26);

/*Set the textContent*/

// Task 2
// define the function updatePizzaDisplay here

// Task 3
// define the function updateOutputColor here
