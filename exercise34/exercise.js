function printAsyncName(callback, name) {
  setTimeout(callback, 1000);

  /* Metto 3000 in modo che parta dopo 2 secondi dalla prima pausa */
  let interval = setInterval(() => {
    console.log(name);
  }, 3000);

  /* Interrompo qui perché volevo provare anche se non richiesto dalla consegna */
  setTimeout(() => {
    clearInterval(interval);
  }, 3500)
}

const sayHello = () => {
  console.log('Hello');
}

printAsyncName(sayHello, 'Andrea')