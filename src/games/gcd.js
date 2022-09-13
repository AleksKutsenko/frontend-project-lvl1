import startGame from '../index.js';
import getRandomNumber from '../utils.js';

const description = 'Find the greatest common divisor of given numbers.';

const findGcd = (x, y) => {
  let a = Math.max(x, y);
  let b = Math.min(x, y);
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
};

const generateRound = () => {
  const number1 = getRandomNumber(0, 100);
  const number2 = getRandomNumber(0, 100);
  const question = `${number1} ${number2}`;
  const answer = String(findGcd(number1, number2));
  return [question, answer];
};

const startGcdGame = () => startGame(description, generateRound);

export default startGcdGame;
