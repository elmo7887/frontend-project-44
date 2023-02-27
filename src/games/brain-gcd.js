import startGame from '../index.js';
import rnd from '../random.js';

const description = 'Find the greatest common divisor of given numbers.';

const getGcd = (a, b) => {
  if (!b) {
    return a;
  }
  return getGcd(b, a % b);
};

const getAnswerAndQuestion = () => {
  const num1 = rnd(1, 100);
  const num2 = rnd(1, 100);
  const question = `${num1} ${num2}`;
  const rightAnswer = String(getGcd(num1, num2));

  return [question, rightAnswer];
};

export default () => startGame(description, getAnswerAndQuestion);
