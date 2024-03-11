console.clear();

// Part 1: Password
const SUPER_SECRET_PASSWORD = "h4x0r1337";

const receivedPassword = "h4x0r1337";

if (SUPER_SECRET_PASSWORD === receivedPassword) {
  console.log("Welcome! You are logged in as Brunhilde1984.");
} else {
  console.log("Access denied!");
}

// Part 2: Even / Odd
const number = 5;

const Rechnung = 6 % 2;

if (Rechnung === 0) {
  console.log("even number");
} else {
  console.log("odd number");
}

// Part 3: Hotdogs
const numberOfHotdogs = 9000000;

if (numberOfHotdogs >= 5 && numberOfHotdogs < 100) {
  console.log(numberOfHotdogs * 1.5 + "€");
} else if (numberOfHotdogs >= 100 && numberOfHotdogs < 1000000) {
  console.log(numberOfHotdogs * 1 + "€");
} else if (numberOfHotdogs >= 1000000) {
  console.log(numberOfHotdogs * 0.1 + "€");
}
// Part 4: Daytime
const currentHour = 12;

const statement = "";

console.log(statement);

// Part 5: Greeting
const userName = "Archibald";

const greeting = "Hello " + "//enter your code here" + "!";

console.log(greeting);
