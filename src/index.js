import readlineSync from 'readline-sync';
import { car, cdr } from '@hexlet/pairs';

const rounds = 3;

const startGame = (info, playRound) => {
  console.log('Welcome to the Brain Games!');
  console.log(info);

  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  for (let round = 0; round < rounds; round++) {
    const generation = playRound();
    const question = car(generation);
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ').toLowerCase();
    const rightAnswer = cdr(generation);

    const isRight = userAnswer === rightAnswer;
    if (isRight) {
      console.log('Correct!');
    } else {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'`
      );
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default startGame;
