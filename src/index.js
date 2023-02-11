import readlineSync from 'readline-sync';

export default (question, answer) => {
  console.log(question);
  const userAnswer = readlineSync.question('Your answer: ');
  if (userAnswer == answer) {
    console.log('Correct!');
  } else {
    console.log(
      "'" +
        userAnswer +
        "'" +
        " is wrong answer ;(. Correct answer was '" +
        answer +
        "'"
    );
    return false;
  }
};
