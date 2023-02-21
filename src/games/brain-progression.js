import startGame from '../index.js';
import rnd from '../random.js';

const info = 'What number is missing in the progression?';

const createProgression = () => {
  const step = rnd(2, 10);
  const firstNum = rnd(1, 100);
  const progression = [firstNum];
  for (let i = 1; i < 10; i += 1) {
    progression[i] = progression[i - 1] + step;
  }
  return progression;
};

const getAnswerAndQuestion = () => {
  const progression = createProgression();
  const hidden = rnd(1, 10);
  const rightAnswer = String(progression[hidden]);
  progression[hidden] = '..';
  const question = progression.join(' ');
  const result = [question, rightAnswer];
  return result;
};

export default () => startGame(info, getAnswerAndQuestion);
