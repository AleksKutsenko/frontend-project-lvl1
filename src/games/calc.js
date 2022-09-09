import startGame from '../index.js';
import randomNumber from '../utils.js';

const operators = ['+', '-', '*'];
const rules = 'What is the result of the expression?';

const calc = (numberFirst, numberSecond, operator) => {
  switch (operator) {
    case '+': return numberFirst + numberSecond;
    case '-': return numberFirst - numberSecond;
    case '*': return numberFirst * numberSecond;
    default:
      throw new Error(`Wrong operator - ${operator}, use (+ or - or *)`);
  }
};

const roundGeneration = () => {
  const numberFirst = randomNumber();
  const numberSecond = randomNumber();
  const operator = operators[Math.round(Math.random() * (operators.length - 1))];
  const question = `${numberFirst} ${operator} ${numberSecond}`;
  const answer = String(calc(numberFirst, numberSecond, operator));
  return [question, answer];
};

const startCalcGame = () => startGame(rules, roundGeneration);

export default startCalcGame;
