//function declaration
function breakfastMenu() {
  return "I'm going to scrambled eggs for breakfast";
}

//anonymous function
const lunchMenu = function () {
  return "I'm going to eat pizza for lunch";
};

const dinnerMenu = (food) => {
  return `I am going to eat ${food} for dinner`;
};

// if only returning any value
// const dinnerMenu = (food) => `I am going to eat ${food} for dinner`;

// if only one parameter than we can pass like this
// const dinnerMenu = food => `I am going to eat ${food} for dinner`;

console.log(dinnerMenu("Butter Chicken"));
