import startGame from '../index.js';
import randomNumber from '../utils.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

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

const roundGeneration = () => {
  const primeNumer = randomNumber();
  const question = `${primeNumer}`;
  const answer = isPrime(primeNumer) ? 'yes' : 'no';
  return [question, answer];
};

const startPrimeGame = () => startGame(rules, roundGeneration);

export default startPrimeGame;
