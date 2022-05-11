"use strict";
let calcAverage = (scores) => scores.reduce((a, b) => a + b) / 3;

let checkWinner = function (dolphinsScore, koalasScore) {
  if (dolphinsScore > koalasScore && dolphinsScore > koalasScore * 2) {
    console.log(
      `dolphins: ${dolphinsScore} koalas: ${koalasScore} koalasx2 ${
        koalasScore * 2
      }`
    );
    return `Dolphins win! (${dolphinsScore} vs ${koalasScore})`;
  } else if (dolphinsScore < koalasScore && dolphinsScore * 2 < koalasScore) {
    console.log(
      `koalas: ${koalasScore} dolphins: ${dolphinsScore} dolphinsx2 ${
        dolphinsScore * 2
      }`
    );
    return `Koalas win! (${koalasScore} vs ${dolphinsScore})`;
  } else {
    console.log(
      `dolphins: ${dolphinsScore} koalas: ${koalasScore} koalasx2 ${
        koalasScore * 2
      } dolphinsx2: ${dolphinsScore * 2}`
    );
    return "no one wins :(";
  }
};

let dolphinScores1 = [44, 23, 71];
let dolphinScores2 = [85, 54, 41];
let koalasScores1 = [65, 54, 49];
let koalasScores2 = [23, 34, 27];

console.log(
  checkWinner(calcAverage(dolphinScores1), calcAverage(koalasScores1))
);

console.log(
  checkWinner(calcAverage(dolphinScores2), calcAverage(koalasScores2))
);
