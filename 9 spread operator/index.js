let contacts = ["Mary", "Joel", "Danny"];

// let personalFriends = contacts;
let personalFriends = ["Raja", ...contacts, "Navjot"];

contacts.push("Beenu");

console.log(personalFriends);
console.log(contacts);

let person = {
  name: "Ravinder",
  age: 25,
  city: "Bangalore",
};

let employee = {
  ...person,
  salary: 20000,
  position: "Software Developer",
};

console.log(person);
console.log(employee);
