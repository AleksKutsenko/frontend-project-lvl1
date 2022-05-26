import readlineSync from 'readline-sync';
import * as general from '../index.js';

const progressionGame = () => {
  general.greeting();
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('What number is missing in the progression?');
  for (let i = 0; i < 3; i += 1) {
    const number1 = Math.round(Math.random() * 100);
    const hiddenNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const hiddenNumber = hiddenNumbers[Math.round(Math.random() * (hiddenNumbers.length - 1))];
    const quest = [];
    let result1 = 0;
    let questresult = '';
    for (let i1 = 0; i1 <= 9; i1 += 1) {
      result1 += number1;
      if (i1 === hiddenNumber) {
        quest.push('..');
        questresult += ' ..';
      } else {
        quest.push(result1);
        questresult = `${questresult} ${result1}`;
      }
    }
    console.log(`Question:${questresult}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const hiddenIndex = quest.indexOf('..');
    const userNumber = quest[hiddenIndex - 1] + number1;
    if (Number(userAnswer) === userNumber) {
      general.right();
    } else {
      const wrongFrst = `'${userAnswer}' is wrong answer ;(. Correct answer was '${userNumber}'.
Let's try again, ${name}!`;
      console.log(wrongFrst);
      break;
    }
    if (i === 2) {
      console.log(`Congratulations, ${name}!`);
    }
  }
};

export default progressionGame;
