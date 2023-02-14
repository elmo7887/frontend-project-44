import { cons } from '@hexlet/pairs';
import startGame from '../index.js';
import rnd from '../random.js';

const info = 'What is the result of the expression?';

const operators = ['+', '-', '*'];

const performOperation = (a, b, c) => {
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

const createGame = () => {
  const num1 = rnd(1, 10);
  const num2 = rnd(1, 10);
  const operator =
    operators[rnd(Math.floor(Math.random()), operators.length - 1)];
  const question = `${num1} ${operator} ${num2}`;
  const rightAnswer = String(performOperation(num1, num2, operator));

  return cons(question, rightAnswer);
};

export default () => startGame(info, createGame);
