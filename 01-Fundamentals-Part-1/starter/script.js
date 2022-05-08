function tipCalc(bill) {
  let tipPerc = bill > 50 && bill < 300 ? 15 : 20;
  let tip = bill * (tipPerc / 100);
  console.log(`tip: ${tip} bill: ${bill}`);
  return bill + tip;
}

console.log(tipCalc(275));
console.log(tipCalc(40));
console.log(tipCalc(430));
