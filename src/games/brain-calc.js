import startGame from '../index.js';
import rnd from '../random.js';

const info = 'What is the result of the expression?';

const operators = ['+', '-', '*'];

const calculate = (a, b, c) => {
  switch (c) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    default:
      return null;
  }
};

const getAnswerAndQuestion = () => {
  const num1 = rnd(1, 10);
  const num2 = rnd(1, 10);
  const operator = operators[rnd(Math.floor(Math.random()), operators.length - 1)];
  const question = `${num1} ${operator} ${num2}`;
  const rightAnswer = String(calculate(num1, num2, operator));
  const result = [question, rightAnswer];
  return result;
};

export default () => startGame(info, getAnswerAndQuestion);
