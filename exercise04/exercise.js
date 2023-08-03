function sumUntil(maxValue) {
  let result = 0;
  /* Non uso reduce perché l'esercizio richiede i loop */
  for (let i = 1; i <= maxValue; i++) {
    result += i;
  }
  return result;
}

console.log(sumUntil(5));