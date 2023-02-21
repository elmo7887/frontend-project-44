import startGame from '../index.js';
import rnd from '../random.js';

const info = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const getAnswerAndQuestion = () => {
  const question = rnd(1, 100);
  const rightAnswer = isEven(question) ? 'yes' : 'no';

  const result = [question, rightAnswer];
  return result;
};

export default () => startGame(info, getAnswerAndQuestion);
