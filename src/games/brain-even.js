import { cons } from '@hexlet/pairs';
import startGame from '../index.js';
import rnd from '../random.js';

const info = 'Answer "yes" if number even otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const createGame = () => {
  const question = rnd(1, 100);
  const rightAnswer = isEven(question) ? 'yes' : 'no';

  return cons(question, rightAnswer);
};

export default () => startGame(info, createGame);
