function getRandomNumber(number1, number2) {
  return Math.round(Math.random() * (number2 - number1) + number1);
}

export default getRandomNumber;
