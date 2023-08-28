function sum(...num) {
  return num.reduce((acc, curr) => acc + curr, 0);
}

const numbers = [1, 2, 3];
console.log(sum(...numbers));