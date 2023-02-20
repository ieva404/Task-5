/* ------------------------------ TASK 5 -----------------------------------
Turimas "users" masyvas. 

Parašykite funckijas, kurios atlikas nurodytas užduotis
1. funkcija "filterDogOwers" - kaip argumentą priims masyvą ir duoto masyvo 
atveju grąžins "users", kurie turi augintinius.
2. funkcija "filterAdults" - kaip argumentą priims masyvą ir duoto masyvo 
atveju grąžins masyvą su "users", kurie yra pilnamečiai.
-------------------------------------------------------------------------- */

const users = [
  { id: "1", name: "John Smith", age: 20, hasDog: true }, //
  { id: "2", name: "Ann Smith", age: 24, hasDog: false },
  { id: "3", name: "Tom Jones", age: 31, hasDog: true }, //
  { id: "4", name: "Rose Peterson", age: 17, hasDog: false },
  { id: "5", name: "Alex John", age: 25, hasDog: true }, //
  { id: "6", name: "Ronald Jones", age: 63, hasDog: true }, //
  { id: "7", name: "Elton Smith", age: 16, hasDog: true }, //
  { id: "8", name: "Simon Peterson", age: 30, hasDog: false },
  { id: "9", name: "Daniel Cane", age: 51, hasDog: true }, //
];

console.log("---------1--------");

const result = users.filter(filterDogOwers);

function filterDogOwers(users) {
  const dogOwner = users.hasDog;

  if (dogOwner === true) {
    return users;
  }
}

filterDogOwers(users);
console.log(result);

console.log("---------2--------");

const result2 = users.filter(filterAdults);

function filterAdults(users) {
  const adult = users.age;
  if (adult >= 18) {
    return users;
  }
}

filterAdults(users);
console.log(result2);
