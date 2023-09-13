const user = {
  id: 1,
  name: "John",
  age: 25,
};

const getData = (data) => {
  try {
    return JSON.parse(localStorage.getItem(data));
  } catch (error) {
    console.error(error)
  }
}

console.log('Dati utente: ', getData('user'));

