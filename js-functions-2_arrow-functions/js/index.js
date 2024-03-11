console.clear();

/*
Rewrite the following functions as arrow functions.
Use implicit returns when possible
*/

const getCurrentHour = () => {
  const now = new Date();
  const currentHour = now.getHours();
  if (currentHour === 0) {
    return "12am";
  } else if (currentHour === 12) {
    return "12pm";
  } else if (currentHour <= 11) {
    return currentHour + "am";
  } else {
    return currentHour - 12 + "pm";
  }
};
console.log(getCurrentHour());

/*function getVectorLength(x, y, z) {
  return (x ** 2 + y ** 2 + z ** 2) ** 0.5;
}*/
const getVectorLength1 = (x, y, z) => x ** 2 + y ** 2 + z ** (2 ** 0.5);
//Test
console.log(getVectorLength1(1, 1, 1));

/*function cleanInput(string) {
  return string.toLowerCase().trim();
}*/

const cleanInput = (string) => string.toLowerCase().trim();
//Test
console.log(cleanInput("HAUS"));

/*
Rewrite the following arrow functions as classic functions.
*/

function isOddAndSmall(number) {
  if (number > 10) {
    return false;
  }

  if (number % 2 === 0) {
    return false;
  }

  return true;
}

//Test
console.log(isOddAndSmall(1));

function add3(a, b, c) {
  result = a + b + c;
  return result;
}
//Test
console.log(add3(1, 2, 3));

function repeat10(string) {
  return string.repeat(10);
}
//Test
console.log(repeat10("Hausfrau"));
