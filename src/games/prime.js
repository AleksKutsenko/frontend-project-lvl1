import readlineSync from 'readline-sync';
import * as general from '../index.js';

const startGame = () => {
  general.greeting();
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const number1 = Math.round(Math.random() * 100);
    console.log(`Question: ${number1}`);
    const answer = readlineSync.question('Your answer: ');
    const rghtAnsw = 'yes';
    const wrngAnsw = 'no';
    let counter = 0;
    let primer = '';
    for (let i1 = 1; i1 <= number1 / 2; i1 += 1) {
      if (number1 % i1 === 0) {
        counter += 1;
      }
      if (counter > 2) {
        primer = false;
      } else if (counter <= 2) {
        primer = true;
      }
    }
    if ((answer === rghtAnsw && primer === true) || (answer === wrngAnsw && primer === false)) {
      general.right();
    } else if ((primer === false) && (answer !== rghtAnsw || answer !== wrngAnsw)) {
      const wrongFrst = `'${answer}' is wrong answer ;(. Correct answer was '${wrngAnsw}'.
Let's try again, ${name}!`;
      console.log(wrongFrst);
      break;
    } else if ((primer === true) && (answer !== rghtAnsw || answer !== wrngAnsw)) {
      const wrongScnd = `'${answer}' is wrong answer ;(. Correct answer was '${rghtAnsw}'.
Let's try again, ${name}!`;
      console.log(wrongScnd);
      break;
    }
    if (i === 2) {
      console.log(`Congratulations, ${name}!`);
    }
  }
};

export default startGame;
