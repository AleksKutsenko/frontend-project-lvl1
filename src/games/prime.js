import startGame from '../index.js';
import { getRandomNumber } from '../utils.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      return false;
    }
  } return true;
};

const generateRound = () => {
  const primeNumer = getRandomNumber(0, 100);
  const question = String(primeNumer);
  const answer = isPrime(primeNumer) ? 'yes' : 'no';
  return [question, answer];
};

const startPrimeGame = () => startGame(description, generateRound);

export default startPrimeGame;
