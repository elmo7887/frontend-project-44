#!/usr/bin/env node

import readlineSync from 'readline-sync';

export default () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?: ');
  console.log('Hello, ' + name + '!');
  function calc() {
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
    let answer = '';
    for (let i = 0; i < 3; ) {
      let random = Math.floor(Math.random() * 100);
      console.log('Question: ' + random);
      if (random % 2 === 0) {
        answer = 'yes';
      } else {
        answer = 'no';
      }
      const userAnswer = readlineSync.question('Your answer: ');
      if (userAnswer === answer) {
        console.log('Correct!');
        i++;
      } else {
        console.log(
          "'" +
            userAnswer +
            "'" +
            " is wrong answer ;(. Correct answer was '" +
            answer +
            "'"
        );
        console.log("Let's try again, " + name + '!');
        break;
      }
      if (i === 3) {
        console.log('Congratulations, ' + name + '!');
        break;
      }
    }
  }
  calc();
};
