import { Animal, Cat } from "./animal.js";

// let cat = new Animal("Cat", 4);

// cat.legs = 3;

// console.log(cat.legs);
// cat.makeNoise("Meow");

// console.log(cat.metaData);
// console.log(Animal.staticFunction());

let cat = new Cat("Cat", 4);
cat.makeNoise();
console.log(cat.metaData);
