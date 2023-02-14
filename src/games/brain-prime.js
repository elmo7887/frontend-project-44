import { cons } from '@hexlet/pairs';
import startGame from '../index.js';
import rnd from '../random.js';

const info = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num <= 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const createGame = () => {
  const question = rnd(1, 100);
  const rightAnswer = isPrime(question) ? 'yes' : 'no';

  return cons(question, rightAnswer);
};

export default () => startGame(info, createGame);
