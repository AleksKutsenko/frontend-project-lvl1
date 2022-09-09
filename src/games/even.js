import startGame from '../index.js';
import randomNumber from '../utils.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (n) => n % 2 === 0;

const roundGeneration = () => {
  const number = randomNumber();
  const question = `${number}`;
  const answer = isEven(number) ? 'yes' : 'no';
  return [question, answer];
};

const startEvenGame = () => startGame(rules, roundGeneration);

export default startEvenGame;
