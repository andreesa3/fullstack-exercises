const isLogged = true;

const isUserLogged = (bool) => {
  return new Promise((resolve, reject) => {
    if (bool) {
      resolve(Math.random());
    } else {
      reject(new Error('You are not logged in!'));
    }
  })
};

const getUserData = (rand) => {
  return new Promise((resolve, reject) => {
    if (rand > 0.5) {
      resolve({ name: "John", age: 24 });
    } else {
      reject(new Error('Num is smaller than 0.5'))
    }
  })
};

isUserLogged(isLogged)
  .then((rand) => getUserData(rand))
  .then((data) => console.log(data))
  .catch((err) => console.log(err))
  .finally(() => console.log('Operazione completata!'))