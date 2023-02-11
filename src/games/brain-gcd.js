import readlineSync from 'readline-sync';
import pattern from '../index.js';

export default () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?: ');
  console.log('Hello, ' + name + '!');

  function getGCD(a, b) {
    if (!b) {
      return a;
    }

    return getGCD(b, a % b);
  }

  function gcd() {
    for (let i = 0; i < 3; i++) {
      let x = Math.floor(Math.random() * 99 + 1);
      let y = Math.floor(Math.random() * 99 + 1);
      let question = x + ' ' + y;
      let answer = getGCD(x, y);
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
  gcd();
};
