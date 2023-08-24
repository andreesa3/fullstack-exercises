class Person {
  constructor(firstName, lastName, age) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._age = age;
  }

  /* SETTERS */
  set firstName(newName) {
    if (typeof newName === 'string') {
      this._firstName = newName;
    } else {
      console.error('Inserire una stringa come valore firstName');
    }
  }
  set lastName(newSurname) {
    if (typeof newSurname === 'string') {
      this._lastName = newSurname;
    } else {
      console.error('Inserire una stringa come valore lastName');
    }
  }
  set age(newAge) {
    if (typeof newAge === 'number') {
      if (newAge < 1) {
        this._age = 1;
      } else if (newAge > 40) {
        this._age = 40;
      } else {
        this._age = newAge;
      }
    } else {
      console.error('Inserire un numero come valore age');
    }
  }

  /* GETTERS */
  get firstName() {
    return this._firstName;
  }
  get lastName() {
    return this._lastName;
  }
  get age() {
    return this._age;
  }
  get fullName() {
    return `${this._firstName} ${this._lastName}`;
  }
}

const person = new Person('Mario', 'Rossi', 25);
console.log(person.fullName);

person.firstName = 'Maria';
person.lastName = 'Verdi';
console.log(person.fullName);