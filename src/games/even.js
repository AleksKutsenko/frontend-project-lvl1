import readlineSync from 'readline-sync';

const startGame = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const right = 'Correct!';
  for (let i = 0; i < 3; i += 1) {
    const number = Math.round(Math.random() * 100);
    const isEven = (number % 2 === 0);
    console.log(`Question: ${number}`);
    const answer = readlineSync.question('Your answer: ');
    const rghtAnsw = 'yes';
    const wrngAnsw = 'no';
    if ((answer === rghtAnsw && isEven === true) || (answer === wrngAnsw && isEven === false)) {
      console.log(right);
    } else if ((isEven === false) && (answer !== rghtAnsw || answer !== wrngAnsw)) {
      const wrongFrst = `'${answer}' is wrong answer ;(. Correct answer was '${wrngAnsw}'.
Let's try again, ${name}!`;
      console.log(wrongFrst);
      break;
    } else if ((isEven === true) && (answer !== rghtAnsw || answer !== wrngAnsw)) {
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
