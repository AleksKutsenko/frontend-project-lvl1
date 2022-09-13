import startGame from '../index.js';
import getRandomNumber from '../utils.js';

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
  const progressionStep = getRandomNumber(0, 100);
  const progressionLength = getRandomNumber(5, 10);
  const hiddenIndex = getRandomNumber(0, progressionLength - 1);
  const progression = generateProgression(startNumber, progressionStep, progressionLength);
  const answer = String(progression[hiddenIndex]);
  progression[hiddenIndex] = '..';
  const question = progression.join(' ');
  return [question, answer];
};
const startProgressionGame = () => startGame(description, generateRound);

export default startProgressionGame;
