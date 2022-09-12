import startGame from '../index.js';
import { getRandomNumber } from '../utils.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (n) => n % 2 === 0;

const generateRound = () => {
  const number = getRandomNumber(0, 100);
  const question = String(number);
  const answer = isEven(number) ? 'yes' : 'no';
  return [question, answer];
};

const startEvenGame = () => startGame(description, generateRound);

export default startEvenGame;
