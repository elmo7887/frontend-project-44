import { cons } from '@hexlet/pairs';
import startGame from '../index.js';
import rnd from '../random.js';

const info = 'What number is missing in the progression?';

const createGame = () => {
  const firstNum = rnd(1, 100);
  const step = rnd(1, 10);
  const progression = [];

  for (let i = 1; i <= 10; i += 1) {
    progression.push(firstNum + i * step);
  }
  const hidden = rnd(1, 10);

  const rightAnswer = String(progression[hidden]);
  progression[hidden] = '..';

  const question = `${progression.join(' ')}`;

  return cons(question, rightAnswer);
};

export default () => startGame(info, createGame);
