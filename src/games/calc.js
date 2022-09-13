import startGame from '../index.js';
import getRandomNumber from '../utils.js';

const operators = ['+', '-', '*'];
const description = 'What is the result of the expression?';

const calculate = (number1, number2, operator) => {
  switch (operator) {
    case '+': return number1 + number2;
    case '-': return number1 - number2;
    case '*': return number1 * number2;
    default:
      throw new Error(`Wrong operator - ${operator}, use (+ or - or *)`);
  }
};

const generateRound = () => {
  const number1 = getRandomNumber(0, 100);
  const number2 = getRandomNumber(0, 100);
  const operator = operators[getRandomNumber(0, operators.length - 1)];
  const question = `${number1} ${operator} ${number2}`;
  const answer = String(calculate(number1, number2, operator));
  return [question, answer];
};

const startCalcGame = () => startGame(description, generateRound);

export default startCalcGame;
