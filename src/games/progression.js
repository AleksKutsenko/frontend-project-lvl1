import startGame from '../index.js';
import randomNumber from '../utils.js';

const rules = 'What number is missing in the progression?';

const generateProgression = (startItem, stepItem) => {
  const progressionArray = [];
  const progressionLength = 10;
  for (let i = 0; i < progressionLength - 1; i += 1) {
    if (i === 0) {
      progressionArray.push(startItem);
    }
    progressionArray.push(progressionArray[i] + stepItem);
  }
  return progressionArray;
};

const roundGeneration = () => {
  const startNumber = randomNumber();
  const howBigStep = randomNumber();
  const hiddenItemIndex = Math.floor(Math.random() * 10);
  const progression = generateProgression(startNumber, howBigStep);
  const hiddenItemValue = progression[hiddenItemIndex];
  progression[hiddenItemIndex] = '..';
  const question = progression.join(' ');
  const answer = String(hiddenItemValue);
  return [question, answer];
};

const startProgressionGame = () => startGame(rules, roundGeneration);

export default startProgressionGame;
