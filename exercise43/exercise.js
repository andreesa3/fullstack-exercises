const user = {
  id: 1,
  name: "John",
  age: 25,
};

const saveToStorage = (data) => {
  localStorage.setItem('user', JSON.stringify(data));
}

saveToStorage(user);