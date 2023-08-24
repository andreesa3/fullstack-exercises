const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
};

const person2 = Object.assign({}, person1);

// Modify the property `firstName` of the `person2` in "Simon".
person2.firstName = "Simon";

// Se non usassimo Object.assign o lo spread operator ci riferiremmo 
// allo stesso oggetto in memoria mentre con questi due metodi stiamo 
// creando due oggetti in memoria che hanno la stessa struttura ma sono 
// indipendenti

console.log(person1);
console.log(person2);
