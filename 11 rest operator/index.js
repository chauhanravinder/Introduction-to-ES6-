// when we don't know how many parameters will pass to function

// function add(nums) {
//   console.log(nums);
//   console.log(arguments);
// }

function add(...nums) {
  console.log(nums);
  //   console.log(arguments);
}

add(4, 5, 6, 7);
