#!/usr/bin/env node

import readlineSync from 'readline-sync';
import pattern from '../index.js';

export default () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?: ');
  console.log('Hello, ' + name + '!');

  function operations() {
    let operation = '';
    let randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
      operation =
        `${Math.floor(Math.random() * 10)}` +
        '+' +
        `${Math.floor(Math.random() * 10)}`;
      return operation;
    }
    if (randomNumber === 1) {
      operation =
        `${Math.floor(Math.random() * 10)}` +
        '-' +
        `${Math.floor(Math.random() * 10)}`;
      return operation;
    }
    if (randomNumber === 2) {
      operation =
        `${Math.floor(Math.random() * 10)}` +
        '*' +
        `${Math.floor(Math.random() * 10)}`;
      return operation;
    }
  }
  function calc() {
    for (let i = 0; i < 3; i++) {
      let question = operations();
      let answer = eval(question);
      let userAnswer = pattern(question, answer);
      if (userAnswer == false) {
        console.log("Let's try again, " + name + '!');
        break;
      }
      if (i === 2) {
        console.log('Congratulations, ' + name + '!');
        break;
      }
    }
  }
  calc();
};
