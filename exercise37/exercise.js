const number = 15;

const myPromise = new Promise((resolve, reject) => {
  if (number > 10) {
    resolve(number);
  } else {
    reject(new Error(`ERROR: Il numero ${number} è minore di 10`))
  }
})

myPromise
  .then((val) => console.log(val))
  .catch((err) => console.error(err));