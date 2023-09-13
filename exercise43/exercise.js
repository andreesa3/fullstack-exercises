const user = {
  id: 1,
  name: "John",
  age: 25,
};

const saveToStorage = (data) => {
  try {
    localStorage.setItem('user', JSON.stringify(data));
  } catch (err) {
    console.error(err);
  }
}

saveToStorage(user);