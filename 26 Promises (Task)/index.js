/**
 * Promises - Challenge
 * Create a promise that returns some user data and throws an error when not found.
 * Log the user data when listening to the promise as well as log the error.
 *
 * Docs - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
 */

const getUserData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const error = false;
      if (error) {
        reject("User not found");
      } else {
        let userData = {
          name: "Ravinder",
          city: "Bangalore",
        };
        resolve(userData);
      }
    }, 3000);
  });
};

getUserData()
  .then((user) => {
    console.log("than Block Executed");
    console.log(user);
  })
  .catch((err) => {
    console.log("catch Block Executed");
    console.log(err);
  });
