function repeatHello(callback) {
  setInterval(callback, 1000);
}

const sayHello = () => console.log('Hello');

repeatHello(sayHello);

/* 
  Usiamo un'arrow function perché:
    1. E' più leggibile e con meno sintassi ;
    2. Si collegano automaticamente al this della funzione genitore 
*/
