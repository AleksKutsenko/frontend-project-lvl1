import startGame from '../index.js';
import randomNumber from '../utils.js';

const rules = 'Find the greatest common divisor of given numbers.';

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
  const numberFirst = randomNumber();
  const numberSecond = randomNumber();
  const question = `${numberFirst} ${numberSecond}`;
  const answer = String(findGcd(numberFirst, numberSecond));
  return [question, answer];
};

const startGcdGame = () => startGame(rules, generateRound);

export default startGcdGame;
