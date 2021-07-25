//Challenge - Async & Await

//Print on the console a random joke from the Chuck Norris API using Fetch and Async and Await

const apiUrl = "https://api.chucknorris.io/jokes/random";

async function getJoke() {
  let jokeData = await fetch(apiUrl);
  let data = await jokeData.json();

  console.log(data);

  let joke = data.value;

  console.log(joke);
}

getJoke();
