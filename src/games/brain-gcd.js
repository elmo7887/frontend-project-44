import { cons } from '@hexlet/pairs';
import startGame from '../index.js';
import rnd from '../random.js';

const info = 'Find the greatest common divisor of given numbers.';

const gcd = (a, b) => {
  if (!b) {
    return a;
  }
  return gcd(b, a % b);
};

const createGame = () => {
  const num1 = rnd(1, 100);
  const num2 = rnd(1, 100);
  const question = `${num1} ${num2}`;
  const rightAnswer = String(gcd(num1, num2));

  return cons(question, rightAnswer);
};

export default () => startGame(info, createGame);
