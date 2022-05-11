// Remember, we're gonna use strict mode in all scripts now!
"use strict";
const temp1 = [17, 21, 23];
const temp2 = [12, 5, -5, 0, 4];
const printForecast = function (temps) {
  let printStr = "...";
  for (let i = 0; i < temps.length; i++) {
    printStr += `${temps[i]}ºC in ${i + 1} days...`;
  }
  console.log(printStr);
};
printForecast(temp1);

printForecast(temp2);
