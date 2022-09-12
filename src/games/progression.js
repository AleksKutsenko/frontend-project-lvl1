import startGame from '../index.js';
import { getRandomNumber, getRandomInt } from '../utils.js';

const description = 'What number is missing in the progression?';

const generateProgression = (startNumber, step, length) => {
  const progressionArray = [startNumber];
  for (let i = 0; i < length - 1; i += 1) {
    progressionArray.push(progressionArray[i] + step);
  }
  return progressionArray;
};

const generateRound = () => {
  const startNumber = getRandomNumber(0, 100);
  const stepSize = getRandomNumber(0, 100);
  const progressionLength = getRandomNumber(5, 10);
  const hiddenItemIndex = getRandomInt(0, progressionLength - 1);
  const progression = generateProgression(startNumber, stepSize, progressionLength);
  const hiddenItemValue = progression[hiddenItemIndex];
  progression[hiddenItemIndex] = '..';
  const question = progression.join(' ');
  const answer = String(hiddenItemValue);
  return [question, answer];
};

const startProgressionGame = () => startGame(description, generateRound);

export default startProgressionGame;
