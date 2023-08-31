/* Metodo 1 */
/* const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25,
};

const json = JSON.stringify({ id: person.id, age: person.age });

console.log(json); */


/* Metodo 2 */
/* const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25,
  toJSON() {
    return { id: this.id, age: this.age };
  }
};

const json = JSON.stringify(person);

console.log(json);

 */