import readlineSync from 'readline-sync';
import * as general from '../index.js';

const calcGame = () => {
  general.greeting();
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('What is the result of the expression?');
  for (let i = 0; i < 3; i += 1) {
    const number1 = Math.round(Math.random() * 100);
    const number2 = Math.round(Math.random() * 100);
    const operators = ['+', '-', '*'];
    const operator = operators[Math.round(Math.random() * (operators.length - 1))];
    if (operator === '+') {
      const calculation1 = number1 + number2;
      console.log(`Question: ${calculation1}`);
      const userAnswer = readlineSync.question('Your answer: ');
      if (Number(userAnswer) === calculation1) {
        general.right();
      } else {
        const wrongFrst = `'${userAnswer}' is wrong answer ;(. Correct answer was '${calculation1}'.
    Let's try again, ${name}!`;
        console.log(wrongFrst);
        break;
      }
    } else if (operator === '-') {
      const calculation2 = number1 - number2;
      console.log(`Question: ${calculation2}`);
      const userAnswer = readlineSync.question('Your answer: ');
      if (Number(userAnswer) === calculation2) {
        general.right();
      } else {
        const wrongScnd = `'${userAnswer}' is wrong answer ;(. Correct answer was '${calculation2}'.
    Let's try again, ${name}!`;
        console.log(wrongScnd);
        break;
      }
    } else if (operator === '*') {
      const calculation3 = number1 * number2;
      console.log(`Question: ${calculation3}`);
      const userAnswer = readlineSync.question('Your answer: ');
      if (Number(userAnswer) === calculation3) {
        general.right();
      } else {
        const wrongThrd = `'${userAnswer}' is wrong answer ;(. Correct answer was '${calculation3}'.
    Let's try again, ${name}!`;
        console.log(wrongThrd);
        break;
      }
    }
    if (i === 2) {
      console.log(`Congratulations, ${name}!`);
    }
  }
};

export default calcGame;
