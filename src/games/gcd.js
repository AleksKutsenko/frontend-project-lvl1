import readlineSync from 'readline-sync';
import * as general from '../index.js';

const startGame = () => {
  general.greeting();
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Find the greatest common divisor of given numbers.');
  for (let i = 0; i < 3; i += 1) {
    const number1 = Math.round(Math.random() * 100);
    const number2 = Math.round(Math.random() * 100);
    console.log(`Question: ${number1} ${number2}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (number1 >= number2) {
      for (let firstNod = number2; firstNod > 0; firstNod -= 1) {
        if (number1 % firstNod === 0 && number2 % firstNod === 0) {
          if (firstNod === Number(userAnswer)) {
            general.right();
            break;
          } else {
            const wrongFrst = `'${userAnswer}' is wrong answer ;(. Correct answer was '${firstNod}'.
Let's try again, ${name}!`;
            console.log(wrongFrst);
            return;
          }
        }
      }
    }
    if ((number1 < number2)) {
      for (let scndNod = number1; scndNod > 0; scndNod -= 1) {
        if (number2 % scndNod === 0 && number1 % scndNod === 0) {
          if (scndNod === Number(userAnswer)) {
            general.right();
            break;
          } else {
            const wrongScnd = `'${userAnswer}' is wrong answer ;(. Correct answer was '${scndNod}'.
Let's try again, ${name}!`;
            console.log(wrongScnd);
            return;
          }
        }
      }
    }
    if (i === 2) {
      console.log(`Congratulations, ${name}!`);
    }
  }
};

export default startGame;
