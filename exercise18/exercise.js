class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  static fromObject(obj) {
    return new Person(obj.firstName, obj.lastName);
  }
}

const object = {
  firstName: 'Marco',
  lastName: 'Rossi'
}

const person = Person.fromObject(object);
console.log(person.firstName + ' ' + person.lastName);