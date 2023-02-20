import startGame from '../index.js';
import rnd from '../random.js';

const info = 'Find the greatest common divisor of given numbers.';

const getGcd = (a, b) => {
  if (!b) {
    return a;
  }
  return getGcd (b, a % b);
};

const getAnswerAndQuestion = () => {
  const num1 = rnd(1, 100);
  const num2 = rnd(1, 100);
  const question = `${num1} ${num2}`;
  const rightAnswer = String(getGcd(num1, num2));

  const result = [question,rightAnswer]
  return result
};

export default () => startGame(info, getAnswerAndQuestion);
