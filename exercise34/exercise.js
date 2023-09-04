function printAsyncName(callback, name) {
  setTimeout(callback, 1000);

  let interval = setInterval(() => {
    console.log(name);
  }, 3000);

  setTimeout(() => {
    clearInterval(interval);
  }, 3500)
}

const sayHello = () => {
  console.log('Hello');
}

printAsyncName(sayHello, 'Andrea')