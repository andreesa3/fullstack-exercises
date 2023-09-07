const number = 15;

const myPromise = (number) => {
  return new Promise((resolve, reject) => {
    if (number > 10) {
      resolve(number);
    } else {
      reject(new Error(`Il numero ${number} è minore di 10`))
    }
  })
};

myPromise(number)
  .then((val) => console.log(val))
  .catch((err) => console.error(err));