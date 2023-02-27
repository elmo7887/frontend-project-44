import startGame from '../index.js';
import rnd from '../random.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const getAnswerAndQuestion = () => {
  const question = rnd(1, 100);
  const rightAnswer = isEven(question) ? 'yes' : 'no';

  return [question, rightAnswer];
};

export default () => startGame(description, getAnswerAndQuestion);
