function getRandomNumber(number1, number2) {
  return Math.round(Math.random() * (number2 - number1) + number1);
}

function getRandomInt(min, max) {
  const firstInt = Math.ceil(min);
  const secondInt = Math.floor(max);
  return Math.floor(Math.random() * (secondInt - firstInt)) + firstInt;
}

export {
  getRandomInt,
  getRandomNumber,
};
