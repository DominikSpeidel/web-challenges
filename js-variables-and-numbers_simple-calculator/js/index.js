console.clear();

let operand1 = 12;
const operand2 = 4;

/*
Mathematical operations
*/
const addButton = document.querySelector('[data-js="add"]');
const subtractButton = document.querySelector('[data-js="subtract"]');
const multiplyButton = document.querySelector('[data-js="multiply"]');
const divideButton = document.querySelector('[data-js="divide"]');
const exponentButton = document.querySelector('[data-js="exponent"]');
const moduloButton = document.querySelector('[data-js="modulo"]');

addButton.addEventListener("click", () => {
  // 1. Add the two operands and store the result in a variable. Log the variable's value to the console.
  ergebnis1 = operand1 + operand2;
  console.log(ergebnis1);
});

subtractButton.addEventListener("click", () => {
  // 2. Subtract the two operands and store the result in a variable. Log the variable's value to the console.
  ergebnis2 = operand1 - operand2;
  console.log(ergebnis2);
});

multiplyButton.addEventListener("click", () => {
  // 3. Multiply the two operands and store the result in a variable. Log the variable's value to the console.
  ergebnis3 = operand1 * operand2;
  console.log(ergebnis3);
});

divideButton.addEventListener("click", () => {
  // 4. Divide the two operands and store the result in a variable. Log the variable's value to the console.
  ergebnis4 = operand1 / operand2;
  console.log(ergebnis4);
});

exponentButton.addEventListener("click", () => {
  // 5. Raise "operand1" to the value of "operand2" and store the result in a variable. Log the variable's value to the console.
  ergebnis5 = operand1 ** operand2;
  console.log(ergebnis5);
});

moduloButton.addEventListener("click", () => {
  // 6. Calculate the remainder when dividing "operand1" by "operand2" and store the result in a variable. Log the variable's value to the console.
  ergebnis6 = operand1 % operand2;
  console.log(ergebnis6);
});

/*
Update the first operand

Please don't forget to think about the declaration of the variable "operand1".
*/

// 7. Increase the value of "operand1" by 1. Log the new value to the console.
const increaseByOneButton = document.querySelector(
  '[data-js="increase-by-one"]'
);
increaseByOneButton.addEventListener("click", () => {
  operand1++;
  console.log(operand1);
});

// 8. Increase the value of "operand1" by 5. Log the new value to the console.
const increaseByFiveButton = document.querySelector(
  '[data-js="increase-by-five"]'
);
increaseByFiveButton.addEventListener("click", () => {
  operand1 = operand1 + 5;
  console.log(operand1);
});

// 9. Kommentar gelöscht, aber es geht darum, dass 1 abgezogen werden soll
const decreaseByOneButton = document.querySelector(
  '[data-js="decrease-by-one"]'
);
decreaseByOneButton.addEventListener("click", () => {
  operand1--;
  console.log(operand1);
});

// 9. Kommentar gelöscht, aber es geht darum, dass 5 abgezogen werden soll
const decreaseByFiveButton = document.querySelector(
  '[data-js="decrease-by-five"]'
);
decreaseByFiveButton.addEventListener("click", () => {
  operand1 -= 5;
  console.log(operand1);
});

// 11. Multiply the value of "operand1" by 2. Log the new value to the console.
const multiplyByTwoButton = document.querySelector(
  '[data-js="multiply-by-two"]'
);
multiplyByTwoButton.addEventListener("click", () => {
  operand1 = operand1 * 2;
  console.log(operand1);
});

// 12. Divide the value of "operand1" by 2. Log the new value to the console.
const divideByTwoButton = document.querySelector('[data-js="divide-by-two"]');
divideByTwoButton.addEventListener("click", () => {
  operand1 /= 2;
  console.log(operand1);
});

increaseByOneButton.addEventListener("click", () => {});

increaseByFiveButton.addEventListener("click", () => {});

decreaseByOneButton.addEventListener("click", () => {
  // 7. Decrease the value of "operand1" by 1. Log the new value to the console.
});

decreaseByFiveButton.addEventListener("click", () => {
  // 8. Decrease the value of "operand1" by 5. Log the new value to the console.
});

multiplyByTwoButton.addEventListener("click", () => {});

divideByTwoButton.addEventListener("click", () => {
  // 12. Divide the value of "operand1" by 2. Log the new value to the console.
});
